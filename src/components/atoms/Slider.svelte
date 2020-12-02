<script>
  import slider from '../../actions/slider'
  let pageX = 0

  function moveHandler(e: MouseEvent) {
    pageX = e.pageX
  }
</script>

<style>
  div {
    --progress: 0%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: var(--progress);
    width: 0.33rem;
    background: white;
    border: 1px solid black;
    cursor: col-resize;
  }
</style>

<svelte:body on:mousemove={moveHandler} />

<div use:slider={pageX} />
