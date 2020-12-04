<script>
  import { progress } from '../../store/slider'
  import slider from '../../actions/slider'
  let pageX = 0

  function moveHandler(e: MouseEvent | TouchEvent) {
    if ('touches' in e) pageX = e.touches[0].pageX
    else pageX = e.pageX
  }
  $: console.log($progress, 'progress')
</script>

<style>
  .slider-container {
    position: relative;
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    width: 100%;
    height: 100%;
  }
  .slider-container > div {
    --progress: 0%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--progress);
    width: 0.33rem;
    background: #d8a278;
    z-index: 40;
  }

  .slider-container > div span {
    --height: 5rem;
    --width: 10rem;
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    cursor: col-resize;
    height: var(--height);
    width: var(--width);
    pointer-events: auto;
  }

  span img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }
</style>

<svelte:body on:mousemove={moveHandler} on:touchmove={moveHandler} />

<div class="slider-container">
  <div use:slider={pageX} style="--progress: {$progress}%">
    <span><img src="/slider.png" alt="Sleep mij!" /></span>
  </div>
</div>
