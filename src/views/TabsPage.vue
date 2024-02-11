<script setup lang="ts">
import {
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue";
import { home, starOutline } from "ionicons/icons";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton
          tab="all"
          href="/facts/all"
          :selected="route.name === 'all'"
        >
          <IonIcon
            aria-hidden="true"
            aria-label="All cat facts view"
            :icon="home"
          />
        </IonTabButton>

        <IonTabButton
          tab="favorites"
          href="/facts/favorites"
          :selected="route.name === 'favorites'"
        >
          <IonIcon
            aria-hidden="true"
            aria-label="Favorites view"
            :icon="starOutline"
          />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
