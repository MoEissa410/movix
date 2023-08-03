import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    url: {},
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    getUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});
export default moviesSlice.reducer;
export const moviesSelect = (state) => state.movies.movies;
export const urlSelect = (state) => state.movies.url;

export const { getUrl, getMovies } = moviesSlice.actions;
