<template>
  <header>
    <nav>
      <div class="navbar-brand">
        <h4>
          <NuxtLink to="/">
            ./mariofdezzz.dev
          </NuxtLink>
        </h4>
      </div>
    </nav>
    <!-- TODO: Add color theme, add lang selector -->
  </header>
</template>

<style scoped lang="scss">
header {
  padding-top: 1.5rem ;
  display: grid;
  grid-template-columns: 1fr min($max-text-width, calc(100% - 2rem)) 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  nav {
    // font-family: Consolas, monospace;
    grid-column: 2;
    letter-spacing: 1px;
    border-bottom: 1px solid $on-bg-disabled;
    padding-bottom: 0.5rem;

    h4 > a {
      color: $on-bg;
    }
  }
}
</style>
