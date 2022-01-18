<script setup lang="ts">
import Tag from "./components/atoms/Tag.vue";
import TextArea from './components/atoms/TextArea.vue'
</script>

<template>
  <div class="grid">
    <div class="container">
      <h1>Place the component here</h1>
      <!-- <Tag /> -->
      <text-area />
    </div>
  </div>
</template>

<style lang="scss">
@import url(./assets/styles/main.scss);
.grid {
  display: grid;
  place-content: center;
  min-height: 100vh;
}

.container {
  padding: 1rem;
  border: 2px dashed --primary-blue-500;
}
</style>
