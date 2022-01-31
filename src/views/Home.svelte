<script>
  let name = 'Aaron';
</script>

<div id="home">
  <div>
    <img src="images/svelte.png" alt="" />
    <div class="text">
      Hello there! This is a testing app serving as a demonstratiton of what is
      Svelte capable of.
    </div>
  </div>
</div>

<style lang="scss">
  #home {
    margin: auto;
    display: flex;
    width: 100%;

    > div {
      margin: auto;
      display: flex;
    }
  }

  img {
    width: 500px;
  }

  .text {
    width: 1000px;
    font-size: 40px;
    text-align: center;
  }
</style>
