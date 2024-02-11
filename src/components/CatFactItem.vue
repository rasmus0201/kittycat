<script lang="ts" setup>
import {
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
  modalController,
} from "@ionic/vue";
import { computed } from "vue";

import { useCatFactsStore } from "@/stores";
import { CatFact } from "@/types";

import CatFactDetailModal from "./CatFactDetailModal.vue";
import CatFactFavoriteButton from "./CatFactFavoriteButton.vue";

interface Props {
  item: CatFact;
  excerptLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  excerptLength: 0,
});

const catFactsStore = useCatFactsStore();

const useExcerpt = computed(
  () => props.excerptLength !== undefined && props.excerptLength > 0,
);
const displayFactText = computed(() =>
  useExcerpt.value
    ? props.item.fact.slice(0, props.excerptLength) + "…"
    : props.item.fact,
);

const onFavoriteToggle = (favorite: boolean) => {
  catFactsStore.setFavorite(props.item.id, favorite);
};

const openModal = async () => {
  const modal = await modalController.create({
    component: CatFactDetailModal,
    componentProps: {
      id: props.item.id,
    },
    initialBreakpoint: 0.85,
    breakpoints: [0, 0.25, 0.5, 0.85, 1],
  });

  modal.present();
};
</script>

<template>
  <IonItem>
    <IonGrid>
      <IonRow class="ion-align-items-center">
        <IonCol>
          <IonLabel>
            <p>{{ displayFactText }}</p>
            <p>
              <IonButton type="button" fill="clear" @click="openModal()"
                >Read more</IonButton
              >
            </p>
          </IonLabel>
        </IonCol>
        <IonCol size="2" class="d-flex ion-justify-content-end">
          <CatFactFavoriteButton
            :is-favorited="props.item.favorite ?? false"
            @toggle="onFavoriteToggle($event)"
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonItem>
</template>
