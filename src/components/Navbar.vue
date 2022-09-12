<template>
  <header>
    <h4>
      ./mariofdezzz.dev
    </h4>
    <!-- TODO: Add color theme, add lang selector -->
  </header>
</template>

<style scoped lang="scss">
header {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr min($max-text-width, calc(100% - 2rem)) 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  h4 {
    // font-family: Consolas, monospace;
    grid-column: 2;
    letter-spacing: 1px;
  }
}
</style>
