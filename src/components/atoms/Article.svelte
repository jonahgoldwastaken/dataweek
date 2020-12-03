<script>
  import { fade } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'
</script>

<style>
  article {
    --height: 15rem;
    --width: 20rem;
    width: var(--width);
    height: var(--height);
    position: absolute;
    top: calc((var(--height) * -0.5));
    right: calc((var(--width) * -1) - 1rem);
    background: url(/paper.png) no-repeat center/cover;
    pointer-events: auto;
    overflow: hidden;
  }

  article div {
    overflow-y: scroll;
    padding: 1rem;
    width: 100%;
    min-height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
  }

  :global(article h2) {
    margin-top: 0px;
    font-size: 2rem;
    max-width: 16rem;
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: 1.25pt;
  }

  :global(article p) {
    margin: 1em 0;
    line-height: 1.5;
  }

  :global(article p:last-child) {
    margin: 0px;
  }

  button {
    all: unset;
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.125;
    border-bottom: 1px solid black;
  }
</style>

<article transition:fade={{ duration: 200, easing: cubicInOut }}>
  <div>
    <button on:click>Sluit</button>
    <slot />
  </div>
</article>
