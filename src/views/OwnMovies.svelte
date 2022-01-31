<script>
  import MovieListing from '../components/MovieListing.svelte';
  import { ownMovies } from '../stores/store.js';

  let movies = [];

  ownMovies.subscribe((value) => {
    movies = value;
  });
</script>

<div class="own-movies">
  <div class="header">Your movies</div>
  <MovieListing movieList={movies} />
</div>

<style lang="scss">
  .own-movies {
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
