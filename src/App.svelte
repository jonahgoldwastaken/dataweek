<script>
  import Wall from './components/organisms/Wall.svelte'
</script>

<style global>
  @import 'normalize.css/opinionated';
  *,
  *:before,
  *:after {
    user-select: none;
  }
  body {
    overflow: hidden;
    pointer-events: none;
    font-family: 'Lora', serif;
  }
</style>

<Wall />
