<style>
  main {
    position: relative;
    margin: 8rem auto;
    width: 56rem;
    height: 44rem;
    display: grid;
    background: #edeae4;
    grid-template-columns: 48rem;
    grid-template-rows: 36rem;
    align-content: center;
    justify-content: center;
  }

  img {
    display: block;
    position: absolute;
    top: 50.6%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 67rem;
    height: 55.8rem;
    z-index: 20;
    object-fit: contain;
  }
</style>

<main>
  <img src="/bg.png" alt="Fotoframe" aria-hidden="true" />
  <slot />
</main>
