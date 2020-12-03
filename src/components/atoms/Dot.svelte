<script>
  import { onMount } from 'svelte'

  onMount(() => {})
</script>

<style>
  button {
    all: unset;
    -webkit-appearance: none;
    appearance: none;
    background: white;
    position: relative;
    top: 50%;
    pointer-events: auto;
  }
</style>

<button on:click>Click!</button>
