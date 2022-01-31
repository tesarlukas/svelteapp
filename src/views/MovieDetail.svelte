<script>
  import { movie } from '../stores/store.js';

  export let currentMovie = {};

  movie.subscribe((data) => {
    currentMovie = data;
  });
</script>

<div class="movie-detail">
  <div class="info">
    <div class="title row">{currentMovie.Title}</div>
    <div class="row">Released: {currentMovie.Released}</div>
    <div class="row">Runtime: {currentMovie.Runtime}</div>
    <div class="row">Genres: {currentMovie.Genre}</div>
    <div class="row">Director: {currentMovie.Director}</div>
    <div class="row">Writers: {currentMovie.Writer}</div>
    <div class="row">Country: {currentMovie.Country}</div>
    <div class="plot row">Plot: {currentMovie.Plot}</div>
  </div>
  <div class="gallery">
    {#each currentMovie.Images as image}
      <img src={image} alt="" />
    {/each}
  </div>
</div>

<style lang="scss">
  .movie-detail {
    height: 80%;
    width: 80%;
    margin: 120px auto;
    display: flex;
  }

  .info {
    width: 50%;
    background-color: var(--color-secondary);
    color: #ffffff;
    padding: 40px;
    box-sizing: border-box;
    font-size: 20px;
  }

  .row {
    display: flex;
  }

  .info .row {
    text-align: left;
  }

  .plot {
    margin-top: 20px;
  }

  .gallery {
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 50%;
      height: 50%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 36px;
    margin-bottom: 40px;
  }
</style>
