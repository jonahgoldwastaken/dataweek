<script>
  import Article from '../atoms/Article.svelte'
  import Dot from '../atoms/Dot.svelte'

  export let top = '0px'
  export let left = '0px'
  export let dot: string = ''

  let articleOpen = false

  function clickHandler() {
    articleOpen = !articleOpen
  }
</script>

<style>
  div {
    --top: 0px;
    --left: 0px;
    position: absolute;
    top: var(--top);
    left: var(--left);
    z-index: 5;
  }
</style>

<div style="--top: {top}; --left: {left}">
  <Dot img={dot} on:click={clickHandler} />
  {#if articleOpen}
    <Article on:click={clickHandler}>
      <slot />
    </Article>
  {/if}
</div>
