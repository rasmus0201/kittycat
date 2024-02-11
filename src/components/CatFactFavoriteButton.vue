<script lang="ts" setup>
import { IonButton, IonIcon } from "@ionic/vue";
import { star, starOutline } from "ionicons/icons";
import { computed } from "vue";

const props = defineProps<{
  isFavorited: boolean;
}>();

const emit = defineEmits<{
  toggle: [boolean];
}>();

const favoriteLabel = computed(() =>
  props.isFavorited ? "Unfavorite" : "Favorite",
);
</script>

<template>
  <IonButton
    fill="clear"
    :aria-label="favoriteLabel"
    @click.stop="emit('toggle', !props.isFavorited)"
  >
    <IonIcon
      aria-hidden="true"
      :icon="props.isFavorited ? star : starOutline"
    />
  </IonButton>
</template>
