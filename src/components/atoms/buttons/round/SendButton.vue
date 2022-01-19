<script setup lang="ts">
import BaseRoundedButton from '../BaseRoundedButton.vue';

</script>
<template>
<BaseRoundedButton class="btn--round"/>
</template>
<style lang="scss">
.btn--round {
  --active-color: var(--primary-500);
  --hover-color: var(--primary-300);
}
</style>