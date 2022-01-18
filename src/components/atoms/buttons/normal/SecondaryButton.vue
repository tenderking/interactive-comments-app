<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
</script>

<template>
  <BaseButton class="btn--normal">
    <slot>No, Cancel</slot>
  </BaseButton>
</template>

<style lang="scss" scoped>
.btn--normal {
  --active-color: var(--neutral-700);
  --hover-color: var(--neutral-600);
}
</style>
