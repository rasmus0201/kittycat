<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, starOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="all" href="/facts/all" :selected="route.name === 'all'">
          <ion-icon aria-hidden="true" aria-label="All cat facts view" :icon="home" />
        </ion-tab-button>

        <ion-tab-button tab="favorites" href="/facts/favorites" :selected="route.name === 'favorites'">
          <ion-icon aria-hidden="true" aria-label="Favorites view" :icon="starOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
