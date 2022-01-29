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
  --active-color: var(--primary-500);
  --hover-color: var(--primary-300);
}
</style>
