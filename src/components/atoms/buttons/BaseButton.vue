<template>
  <button type="button" class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;

  &--flat {
    background-color: transparent;
    padding: 0.5rem;

    display: inline-grid;
    grid-auto-flow: column;
    place-items: center;
    gap: 0.5rem;

    /* these colors are defined in the components */
    fill: var(--active-color);
    color: var(--active-color);

    &:hover {
      fill: var(--hover-color);
      color: var(--hover-color);
    }

    &:focus {
      outline: 2px solid var(--active-color);
    }
  }
}
</style>
