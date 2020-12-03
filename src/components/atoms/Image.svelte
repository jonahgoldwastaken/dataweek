<script>
  export let src: string
  export let alt: string
</script>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
</style>

<img {src} {alt} />
