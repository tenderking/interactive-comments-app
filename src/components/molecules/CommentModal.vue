<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useUser } from "../../stores/store";
import DangerButton from "../atoms/buttons/normal/DangerButton.vue";
import SecondaryButton from "../atoms/buttons/normal/SecondaryButton.vue";

onBeforeMount(() => document.body.style.overflow = "hidden")
onBeforeUnmount(() => document.body.style.overflow = "auto")

const store = useUser()

const hideModal = () => {
  if(store.idToDelete) store.deleteComment(store.idToDelete)
  
  store.handleModal(false)
  // store.$patch({ isRepliedComment: null})
}
</script>

<template>
  <div class="modal-container" @click.self="store.handleModal(false)">
    <section class="modal">
      <h2 class="modal__title">Delete comment</h2>
      <p class="modal__content">
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone
      </p>
      <aside class="modal__actions">
        <SecondaryButton @click="store.handleModal(false)" />
        <DangerButton @click="hideModal()" />
      </aside>
    </section>
  </div>
     
</template>

<style lang="scss" scoped>

.modal-container {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  place-content: center
}
.modal {
  max-width: 21.5rem;
  display: grid;
  gap: 1rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 1.75rem;

  &__title {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1em;
    color: var(--neutral-700);
  }

  &__content {
    line-height: 1.5em;
    color: var(--neutral-600);
  }

  &__actions {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
  }

  @media (min-width: 35rem) {
    max-width: 400px;
    padding: 2rem;
    gap: 1.25rem;

    &__content {
      padding-top: 0.25rem;
    }
  }
}
</style>
