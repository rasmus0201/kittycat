<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { storeToRefs } from "pinia";

import CatFactItem from "@/components/CatFactItem.vue";
import { useCatFactsStore } from "@/stores";

const { favorites } = storeToRefs(useCatFactsStore());
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Favorites</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonContent class="ion-padding"></IonContent>
      <IonList>
        <CatFactItem
          v-for="(catFact, index) in favorites"
          :key="index"
          :item="catFact"
          :excerpt-length="50"
        />
      </IonList>
    </IonContent>
  </IonPage>
</template>
