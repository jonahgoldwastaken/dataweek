<style>
  main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48rem;
    height: 36rem;
    display: grid;
    grid-template-columns: 48rem;
    grid-template-rows: 36rem;
  }
</style>

<main>
  <slot />
</main>
