<script setup lang="ts">
import { useDark, useToggle } from '../composables'
import Button from './common/Button.vue'
import Moon from './common/svg/Moon.vue'
import Sun from './common/svg/Sun.vue'

const isDark = useDark({
  selector: ':root'
})
const toggleTheme = useToggle(isDark)
</script>

<template>
  <header>
    <nav>
      <div class="navbar-brand">
        <NuxtLink to="/">
          ./mariofdezzz.dev
        </NuxtLink>

        <!-- TODO: Add lang selector -->

        <Button :aria-label="'Toggle color theme'">
          <Moon v-if="isDark" @click="toggleTheme()" />
          <Sun v-else @click="toggleTheme()" />
        </Button>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  padding-top: 1.5rem;
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

     a {
      color: $on-bg;
      font-size: 1.05rem;
    }

    .navbar-brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
