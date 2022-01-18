<script setup lang="ts">
import Tag from "./components/atoms/Tag.vue";
</script>

<template>
  <div class="grid">
    <div class="container">
      <h1>Place the component here</h1>
      <Tag />
    </div>
  </div>
</template>

<style lang="scss">
.grid {
  display: grid;
  place-content: center;
  min-height: 100vh;
}

.container {
  padding: 1rem;
  border: 2px dashed dodgerblue;
}
</style>
