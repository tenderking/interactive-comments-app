<script setup lang="ts">
import CommentView from './components/molecules/CommentView.vue';
</script>

<template>
  <div class="grid">
    <div class="container">
      <CommentView />
    </div>
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
  border: 2px dashed dodgerblue;
  max-width: 30rem;

  @media (min-width: 52rem) {
    max-width: 46rem;
  }

  > * + * {
    margin-top: 1.5rem;
  }
}
</style>
