<style>
  main {
    position: relative;
    margin: 8rem auto;
    width: 50.666666667rem;
    height: 38rem;
    display: grid;
    background: #edeae4;
    grid-template-columns: 42rem;
    grid-template-rows: 30rem;
    align-content: center;
    justify-content: center;
  }

  img {
    display: block;
    position: absolute;
    top: 50.6%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60rem;
    height: 48rem;
    z-index: 20;
    object-fit: contain;
  }
</style>

<main>
  <img src="/bg.png" alt="Fotoframe" aria-hidden="true" />
  <slot />
</main>
