<script setup lang="ts">
import EditButton from "./components/atoms/buttons/flat/EditButton.vue";
import DeleteButton from "./components/atoms/buttons/flat/DeleteButton.vue";
import ReplyButton from "./components/atoms/buttons/flat/ReplyButton.vue";
</script>

<template>
  <div class="grid">
    <div class="container">
      <h1>Place the component here</h1>
      <EditButton />
      <DeleteButton />
      <ReplyButton />
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
  text-align: center;
  border: 2px dashed dodgerblue;

  > * + * {
    margin-top: 1.5rem;
  }
}
</style>
