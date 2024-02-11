<script lang="ts" setup>
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import { computed } from "vue";

import { useCatFactsStore } from "@/stores";
import { CatFact } from "@/types";

import CatFactFavoriteButton from "./CatFactFavoriteButton.vue";

const props = defineProps<{
  id: number;
}>();

const catFactsStore = useCatFactsStore();

const catFact = computed<CatFact | undefined>(() =>
  catFactsStore.catFacts.find((f) => f.id === props.id),
);

const dismiss = () => modalController.dismiss(null, "dismiss");

const onFavoriteToggle = (favorite: boolean) => {
  if (!catFact.value) {
    return;
  }

  catFactsStore.setFavorite(catFact.value.id, favorite);
};
</script>

<template>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Cat Fact Details</IonTitle>
      <IonButtons slot="end">
        <IonButton @click="dismiss()">Close</IonButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
  <IonContent v-if="catFact" class="ion-padding">
    <IonGrid>
      <IonRow class="ion-align-items-center">
        <IonCol>
          <p>{{ catFact.fact }}</p>
        </IonCol>
        <IonCol size="auto" class="d-flex ion-justify-content-end">
          <CatFactFavoriteButton
            :is-favorited="catFact.favorite ?? false"
            @toggle="onFavoriteToggle($event)"
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</template>
