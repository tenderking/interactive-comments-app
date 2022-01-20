<script setup lang="ts">
import DangerButton from "../atoms/buttons/normal/DangerButton.vue";
import SecondaryButton from "../atoms/buttons/normal/SecondaryButton.vue";
</script>

<template>
  <section class="modal">
    <h2 class="modal__title">Delete comment</h2>
    <p class="modal__content">
      Are you sure you want to delete this comment? This will remove the
      comment and can’t be undone
    </p>
    <aside class="modal__actions">
      <SecondaryButton />
      <DangerButton />
    </aside>
  </section>
     
</template>

<style lang="scss" scoped>
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
