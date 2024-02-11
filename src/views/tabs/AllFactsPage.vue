<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { storeToRefs } from "pinia";

import CatFactItem from "@/components/CatFactItem.vue";
import { useCatFactsStore } from "@/stores";

const { catFacts } = storeToRefs(useCatFactsStore());
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cat Facts</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonList>
        <IonItem v-if="catFacts.length === 0">
          <IonLabel>No cat facts today :(</IonLabel>
        </IonItem>
        <CatFactItem
          v-for="(catFact, index) in catFacts"
          :key="index"
          :item="catFact"
          :excerpt-length="50"
        />
      </IonList>
    </IonContent>
  </IonPage>
</template>
