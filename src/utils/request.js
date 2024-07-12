const API_KEY = import.meta.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US
`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US
`,
  topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US
`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US
`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US
`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US
`,
  romanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US
`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US
`,
  tVShows: `/discover/tv?api_key=${API_KEY}&language=en-US
`,
};
export default requests;
