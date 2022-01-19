<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
</script>

<template>
  <BaseButton class="btn--normal">
    <slot>Yes, Delete</slot>
  </BaseButton>
</template>

<style lang="scss" scoped>
.btn--normal {
  --active-color: var(--secondary-500);
  --hover-color: var(--secondary-300);
}
</style>
