<style>
  article {
    --height: 15rem;
    --width: 25rem;
    height: min-content;
    width: var(--width);
    height: var(--height);
    position: absolute;
    right: calc((var(--width) * -1) - 2rem);
    top: calc((var(--height) * -0.5));
    background: red;
    pointer-events: auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-overflow-y: auto; /* added css prefix for safari */
  }

  :global(article h2) {
    margin-top: 0px;
    font-size: 3rem;
    line-height: 1.125;
  }

  :global(article p) {
    margin: 1em 0;
    line-height: 1.5;
  }

  :global(article p:last-child) {
    margin: 0px;
  }
</style>

<article>
  <slot />
</article>
