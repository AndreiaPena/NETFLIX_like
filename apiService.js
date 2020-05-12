const APÎ_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "b91314f1ac9c4c3911df38fae5afbc68";

//1
// export function fetchMovie(movieId, cb) {
//   const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       return cb(JSON.parse(xhr_object.responseText));
//     }
  
// }

//2
// export default function fetchMovie(movieId) {
//   const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

//   return new Promise((resolve, reject) => {
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       resolve(JSON.parse(xhr_object.responseText));
//     }
//   });
// }

// export default function fetchMovie(movieId) {
//   const url = ``;
//   return fetch(url).then(res => {
//     return res.json()
//   }).then(movie => {
//       return movie;
//   })
// }

//3
export  async function fetchMovie(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  // console.log(movie);
  return movie;
}

export async function fetchNetflixOriginals() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let netflixOriginals = await res.json();
  // console.log(netflixOriginals);
  return netflixOriginals;
}

export async function fetchTrending() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`;
  let res = await fetch(url);
  let trending = await res.json();
  // console.log(trending);
  return trending;
}

export async function fetchTopRated() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=vote_average.desc`;
  let res = await fetch(url);
  let topRated = await res.json();
  // console.log(topRated);
  return topRated;
}

export async function fetchByGenreMovies(genre) {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=${genre}`;
  let res = await fetch(url);
  let genreMovies = await res.json();
  // console.log(genreMovies);
  return genreMovies;
}


export async function fetchModal() {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let filmsModal = await res.json();
  // console.log(genreMovies);
  return filmsModal;
}