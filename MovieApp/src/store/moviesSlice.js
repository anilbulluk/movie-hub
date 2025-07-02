import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from '../utils/api';

export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  async ({ page = 1, query = ''})=> {
    const result = await fetchMovies(page, query);
    return result;
  }
)
const moviesSlice = createSlice({
  name:'movies',
  initialState: {
    movies: [],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
    query: ''
  },
  reducers: {
    setQuery: (state, action)=> {
      state.query = action.payload;
      state.movies = [];
      state.page = 1;
    },
    resetMovies: (state) => {
      state.movies = [];
      state.page = 1;
    }},
  extraReducers:(builder)=> {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages

        if (action.payload.page === 1) {
          state.movies = action.payload.movies
        } else {
          state.movies = [...state.movies, ...action.payload.movies]
        }
      })
      .addCase(loadMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }})

export const { setQuery, resetMovies } = moviesSlice.actions
export default moviesSlice.reducer