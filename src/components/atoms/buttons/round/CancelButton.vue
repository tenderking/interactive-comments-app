<script setup lang="ts">
import BaseRoundedButton from '../BaseRoundedButton.vue';
</script>
<template>
<BaseRoundedButton class="btn--round"/>
</template>
<style lang="scss">
.btn--round {
  --active-color: var(--neutral-600);
  --hover-color: var(--neutral-200);
}
</style>