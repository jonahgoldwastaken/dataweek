<script>
  import { fade } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'

  export let left = false
</script>

<style>
  article {
    --height: 15rem;
    --width: 20rem;
    box-sizing: border-box;
    width: var(--width);
    height: var(--height);
    position: absolute;
    top: calc((var(--height) * -0.5));
    right: calc((var(--width) * -1) - 1rem);
    background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
      ),
      url(/paper.png) no-repeat center/cover;
    padding: 1rem;
    pointer-events: auto;
    overflow: hidden;
    overflow-y: scroll;
  }

  article.left {
    left: calc((var(--width) * -1) - 1rem);
    right: auto;
  }

  :global(article h2) {
    margin-top: 0px;
    font-size: 1.5rem;
    max-width: 17rem;
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: 1.25pt;
  }

  :global(article p) {
    margin: 1em 0;
    width: 100%;
    line-height: 1.5;
    font-family: 'Special Elite';
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

<article class:left transition:fade={{ duration: 200, easing: cubicInOut }}>
  <button on:click>X</button>
  <slot />
</article>
