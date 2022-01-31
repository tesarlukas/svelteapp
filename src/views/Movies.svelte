<script>
  import MovieListing from '../components/MovieListing.svelte';

  export let movieList = [];
</script>

<div class="movies-view">
  <div class="header">Listed movies</div>
  <MovieListing {movieList} />
</div>

<style lang="scss">
  .movies-view {
    width: 100%;
    display: flex;
    flex-direction: column;

    .header {
      text-align: left;
      font-size: 40px;
      width: 80%;
      margin: 20px auto 0 auto;
      padding: 10px;
    }
  }
</style>
