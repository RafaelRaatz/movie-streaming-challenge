import axios from 'axios';

export const api = axios.get(
  'https://api.themoviedb.org/3/movie/popular?api_key=e6cd3fd17fe21531be8890bd2fda04b3&language=en-US&page=1'
 );
export const apiSeries = axios.get(
  'https://api.themoviedb.org/3/tv/popular?api_key=e6cd3fd17fe21531be8890bd2fda04b3&language=en-US&page=1'
);
