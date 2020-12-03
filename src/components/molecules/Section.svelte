<script>
  import Image from '../atoms/Image.svelte'
  export let image: { src: string; alt: string }
  export let clipPath: string
</script>

<style>
  section {
    position: relative;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    box-shadow: inset 0px 9px 16px 0px rgba(0, 0, 0, 1);
  }
</style>

<section style="clip-path: {clipPath}">
  <Image {...image} />
  <slot />
</section>
