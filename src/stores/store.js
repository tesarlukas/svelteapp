import { writable } from 'svelte/store';

export const movie = writable({
  Title: 'Avatar',
});

export const user = writable({
  username: '',
  password: '',
});

export const ownMovies = writable([]);
