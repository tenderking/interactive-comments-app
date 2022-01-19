<script setup lang="ts">
import BaseRoundedButton from '../BaseRoundedButton.vue';
</script>
<template>
<BaseRoundedButton class="btn--round"/>
</template>
<style lang="scss">
.btn--round {
  --active-color: var(--secondary-500);
  --hover-color: var(--seondary-300);
}
</style>