<script>
  export let large = false
  export let center = false
</script>

<style>
  p {
    font-family: Lora, serif;
    width: 42rem;
    margin: 1em auto;
    font-size: 1rem;
    line-height: 1.5;
  }

  .large {
    font-size: 2em;
  }

  .center {
    text-align: center;
  }
</style>

<p class:large class:center>
  <slot />
</p>
