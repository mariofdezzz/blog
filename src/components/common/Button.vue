<script setup lang="ts">

</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  padding: .1rem;
  color: $on-bg;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: border-color .2s ease-in-out;

  &:hover {
    border-color: $on-bg-disabled;
  }
}
</style>
