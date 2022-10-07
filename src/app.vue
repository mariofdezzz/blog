<script setup lang="ts">
import { useHead } from '#app'
import Navbar from './components/Navbar.vue'

useHead({
  title: 'Mario\'s Blog',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: 'description',
      content: 'I\'m Mario Ferrero (@mariofdezzz) and I work as a Software Engineer. I use this blog to share and reinforce my knowledge, so I can grow personally and make our community grow too.'
    }
  ]
})
</script>

<template>
  <div id="app">
    <Navbar />

    <main>
      <NuxtPage />
    </main>

    <!-- <footer></footer> -->
  </div>
</template>

<style lang="scss">
body {
  background-color: $bg;
  color: $on-bg;
}

#app {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template: auto 1fr auto / 1fr min($max-text-width, calc(100% - 2rem)) 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  header,
  footer {
    grid-column: 1/4;
  }

  main {
    grid-column: 2;
  }
}
</style>
