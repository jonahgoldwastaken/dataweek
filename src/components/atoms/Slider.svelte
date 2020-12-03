<script>
  import { progress } from '../../store/slider'
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
    z-index: 10;
  }

  div span {
    position: absolute;
    bottom: -40px;
    transform: translateX(-50%);
    cursor: col-resize;
    pointer-events: auto;
  }
</style>

<svelte:body on:mousemove={moveHandler} />

<div use:slider={pageX} style="--progress: {$progress}%">
  <span>Verschuif</span>
</div>
