<script lang="ts" setup>
import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from "@ionic/vue";
import { computed } from "vue";
import { RouterLink } from "vue-router";

import { CatFact } from "@/types";

const props = defineProps<{ item: CatFact; excerptLength?: number }>();

const useExcerpt = computed(
  () => props.excerptLength !== undefined && props.excerptLength > 0,
);
const displayFactText = computed(() =>
  useExcerpt.value
    ? props.item.fact.slice(0, props.excerptLength) + "…"
    : props.item.fact,
);
</script>

<template>
  <IonItem>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonLabel>
            <p>{{ displayFactText }}</p>
            <p>
              <RouterLink
                :to="{ name: 'factDetails', params: { id: props.item.id } }"
                >Read more</RouterLink
              >
            </p>
          </IonLabel>
        </IonCol>
        <IonCol size="2" class="ion-justify-content-end"> </IonCol>
      </IonRow>
    </IonGrid>
  </IonItem>
</template>
