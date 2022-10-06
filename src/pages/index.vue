<template>
  <div>
    <h1>Latest Posts</h1>

    <div class="no-posts">
      <h2>
        Nothing to see here
        <span class="blinking"> yet </span>
      </h2>

      <img src="assets/images/pixel-doggo.gif" alt="Swimming dog">
    </div>
  </div>
</template>

<style scoped lang="scss">
h1,
h2 {
  margin-bottom: 2rem;
}

.no-posts {
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    opacity: 0.8;
  }

  img {
    margin: auto;
    width: 5rem;
  }
}

.blinking {
  opacity: 0;
  animation: blinking 10s ease infinite;
}

@keyframes blinking {
  30% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
}
</style>
