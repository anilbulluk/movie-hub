const mockMovies = require('../data/mockMovies.json');

export const fetchMovies= async (page = 1, query = '')=>{
  let movies = mockMovies.data;
  if (query) {
    movies = movies.filter(m=>
      (m.original_title || '').toLowerCase().includes(query.toLowerCase())
    )}

  const perPage = 10;
  const totalPages = Math.ceil(movies.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paged = movies.slice(start, end);

  const mapped = paged.map(m => ({
    id: m.id,
    title: m.original_title,
    director: 'Unknown',
    year: m.release_date ? Number(m.release_date.slice(-4)) : 0,
    poster: m.poster_path,
    rating: m.vote_average,
    genre: ['Unknown'],
    description: m.overview,
    casts: m.casts || []
  }))

  return{
    movies: mapped,
    totalPages,
    page
  }}