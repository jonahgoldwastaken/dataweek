<script>
  import 'css-doodle'
</script>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>

<div>
  <css-doodle>
    {`

      @grid: 15 x 20 / 100vw 100vh;
      @size: 100% 100%;
      justify-self: center;
      align-self: center;
      border: 2px solid #fff8e8;
      opacity: calc(@sin(@i / @rand(1, 10)) * 1);
    `}
  </css-doodle>
</div>
