<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
</script>

<template>
  <BaseButton class="btn--flat">
    <svg
      viewBox="0 0 14 14"
      width="14"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.167 12.448C2.167 13.302 2.867 14 3.722 14H9.944C10.8 14 11.5 13.302 11.5 12.448V3.5H2.167V12.448ZM12.667 1.167H9.75L8.773 0H4.893L3.917 1.167H1V2.333H12.667V1.167V1.167Z"
      />
    </svg>
    Delete
  </BaseButton>
</template>

<style lang="scss" scoped>
.btn--flat {
  --active-color: var(--secondary-500);
  --hover-color: var(--secondary-300);
}
</style>
