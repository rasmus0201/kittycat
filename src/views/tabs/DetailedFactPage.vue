<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";

import CatFactItem from "@/components/CatFactItem.vue";
import { useCatFactsStore } from "@/stores";

const { catFacts } = storeToRefs(useCatFactsStore());

const route = useRoute();

const catFact = computed(() =>
  catFacts.value.find((fact) => fact.id.toString() === route.params?.id),
);
</script>

<template>
  <IonPage v-if="catFact">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cat Fact Details</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <CatFactItem :item="catFact" />
    </IonContent>
  </IonPage>
</template>
