<script>
  import { user } from '../stores/store.js';
  import { useNavigate } from 'svelte-navigator';

  let username = '';
  let password = '';
  const navigate = useNavigate();

  function onSubmit() {
    if (username === 'admin' && password === '1234') {
      user.set({ username, password });

      navigate('/movies');
    }
  }
</script>

<form action="">
  <label for="">Username</label>
  <input type="text" bind:value={username} />
  <label for="">Password</label>
  <input type="password" bind:value={password} />
  <button on:click|preventDefault={onSubmit}>Login</button>
</form>

<style lang="scss">
</style>
