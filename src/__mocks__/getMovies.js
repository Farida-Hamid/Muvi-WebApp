import fetch from "node-fetch";

export const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=24997fed86518e9d29afc6b7f7510f37&page=1';

// Get Initial Movies
export async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data.results
}