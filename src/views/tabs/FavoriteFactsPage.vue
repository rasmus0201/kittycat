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

import CatFactItem from "@/components/CatFactItem.vue";
import { useCatFactsStore } from "@/stores";

const catFacts = useCatFactsStore();
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Favorites</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonList>
        <IonItem v-if="catFacts.favorites.length === 0">
          <IonLabel>No favorites yet</IonLabel>
        </IonItem>
        <template v-else>
          <CatFactItem
            v-for="(catFact, index) in catFacts.favorites"
            :key="index"
            :item="catFact"
            :excerpt-length="50"
          />
        </template>
      </IonList>
    </IonContent>
  </IonPage>
</template>
