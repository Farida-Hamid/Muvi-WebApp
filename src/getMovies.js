import display from './display.js';
import fetch from "node-fetch";

export const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=24997fed86518e9d29afc6b7f7510f37&page=1';
export const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=24997fed86518e9d29afc6b7f7510f37&query="';

// Get Initial Movies
export async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  display(data.results);
  return data.results
}