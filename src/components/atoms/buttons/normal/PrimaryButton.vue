<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
</script>

<template>
  <BaseButton class="btn--normal">
    <slot>Send</slot>
  </BaseButton>
</template>

<style lang="scss" scoped>
.btn--normal {
  --active-color: var(--primary-blue-500);
  --hover-color: var(--primary-blue-300);
}
</style>
