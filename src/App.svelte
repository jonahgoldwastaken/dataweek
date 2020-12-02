<script>
  import Frame from './components/atoms/Frame.svelte'
  import Slider from './components/atoms/Slider.svelte'
</script>

<style global>
  @import '../node_modules/normalize.css/normalize.css';
  *,
  *:before,
  *:after {
    user-select: none;
  }
</style>

<h1>Dataweek</h1>
<Frame>
  Test
  <Slider />
</Frame>
