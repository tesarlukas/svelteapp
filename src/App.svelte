<script>
  import * as movieList from './assets/movies.json';

  import { Router, Link, Route } from 'svelte-navigator';
  import Home from './views/Home.svelte';
  import Movies from './views/Movies.svelte';
  import MovieDetail from './views/MovieDetail.svelte';
  import Login from './views/Login.svelte';
  import OwnMovies from './views/OwnMovies.svelte';

  import { user } from './stores/store.js';

  let currentUser;

  user.subscribe((value) => {
    currentUser = value;
  });
</script>

<Router>
  <nav class="navbar">
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    {#if currentUser.username !== 'admin'}
      <Link to="/login">Login</Link>
    {/if}
    {#if currentUser.username === 'admin'}
      <Link to="/ownMovies">My movies</Link>
    {/if}
  </nav>

  <div class="page">
    <Route path="/" component={Home} />
    <Route path="/movies">
      <Movies movieList={movieList.default} />
    </Route>
    <Route path="/movie">
      <MovieDetail />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/ownMovies">
      <OwnMovies movies={movieList.default} />
    </Route>
    <!-- <Route path="about" component={About} />
    <Route path="blog/*">
      <Route path="/">
        <Blog />
      </Route>
      <Route path=":id" component={BlogPost} />
    </Route> -->
  </div>
</Router>

<style type="text/scss">
  .navbar {
    padding: 30px 20px;
    width: 100%;
    background-color: var(--color-secondary);
    color: var(--color-text);
    box-sizing: border-box;

    :global(a) {
      padding: 20px;
      // background-color: var(--color-primary);
    }
  }

  .page {
    height: calc(100% - 78.75px);
    display: flex;
  }
</style>
