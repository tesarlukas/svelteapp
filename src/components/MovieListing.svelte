<script>
  import { useNavigate } from 'svelte-navigator';
  import { movie } from '../stores/store.js';

  export let movieList = [];

  const navigate = useNavigate();

  function redirect(movieObject) {
    movie.set(movieObject);
    navigate('/movie');
  }
</script>

<div class="movies">
  {#each movieList as movie (movie.imdbID)}
    <div on:click={() => redirect(movie)} class="movie">
      <img class="image" src={movie.Images[0]} alt="" />
      <div class="title">{movie.Title}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  .movies {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    .movie {
      display: flex;
      margin: auto;
      width: calc(25% - 20px);
      flex-direction: column;
      margin: 10px;
      border-radius: 10px;
      background-color: var(--color-secondary);

      .image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
      }

      .title {
        text-align: left;
        font-size: 35px;
        padding: 20px;
        color: white;
      }
    }
  }
</style>
