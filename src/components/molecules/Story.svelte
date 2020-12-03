<script>
  import Article from '../atoms/Article.svelte'
  import Dot from '../atoms/Dot.svelte'

  export let top = '0px'
  export let left = '0px'
  export let dot: string = ''
  export let alignLeft = false

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

  div.articleOpen {
    z-index: 10;
  }
</style>

<div style="--top: {top}; --left: {left}" class:articleOpen>
  <Dot img={dot} on:click={clickHandler} />
  {#if articleOpen}
    <Article left={alignLeft} on:click={clickHandler}>
      <slot />
    </Article>
  {/if}
</div>
