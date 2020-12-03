<script>
  export let img = '/dot_old.png'
</script>

<style>
  button {
    all: unset;
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    width: 3rem;
    height: 3rem;
    top: 50%;
    pointer-events: auto;
    cursor: pointer;
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    z-index: -1;
    animation: button-animation 2s ease infinite;
  }

  .geo::before {
    top: 50%;
  }

  @keyframes button-animation {
    from {
      transform: scale(0);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50%,
    to {
      transform: scale(1);
      opacity: 0;
    }
  }

  button img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>

<button class:geo={img === '/dot_new.png'} on:click><img
    src={img}
    alt="Klik op mij, ik ben een knop!"
  /></button>
