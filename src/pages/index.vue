<template>
  <div>
    <h2>Latest Posts</h2>

    <div class="no-posts">
      <h3>
        Nothing to see here
        <span class="blinking"> yet </span>
      </h3>

      <img src="assets/images/pixel-doggo.gif" alt="Swimming dog">
    </div>
  </div>
</template>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 2rem;
}

h2 {
  font-size: 22px;
}
h3{
  font-size: 16px;
}

.no-posts {
  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
