<script setup lang="ts">
import CommentModal from './components/molecules/CommentModal.vue';
</script>

<template>
  <div class="grid">
    <CommentModal />
  </div>
</template>

<style lang="scss">
.grid {
  display: grid;
  place-content: center;
  min-height: 100vh;
  background-color: var(--neutral-100);
}

.container {
  padding: 1rem;
  text-align: center;
  border: 2px dashed dodgerblue;

  > * + * {
    margin-top: 1.5rem;
  }
}
</style>
