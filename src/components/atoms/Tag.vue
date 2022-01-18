<template>
  <span class="tag">you</span>
</template>

<style lang="scss" scoped>
.tag {
  font-size: 0.875rem;
  line-height: 1em;
  letter-spacing: -0.02em;
  /*
    the 3 styles above could be extract onto an utility,
    like font-tag or something like that
  */
  display: inline-block;
  color: var(--white);
  padding: 1px 6px 4px;
  background-color: var(--primary-blue-500);
  border-radius: 2px;
}
</style>
