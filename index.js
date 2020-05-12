import {fetchMovie} from "./apiService.js";
import Header from "./components/Header.mjs";
import Modal from "./components/Modal.mjs";
import {fetchNetflixOriginals} from "./apiService.js";
import {fetchTrending} from "./apiService.js";
import {fetchTopRated} from "./apiService.js";
import {fetchByGenreMovies} from "./apiService.js";
import {fetchModal} from "./apiService.js";


// (() => {
//   //Callback
//   const getResponse = (data) => {
//     return data;
//   };
//   try {
//     let movie = fetchMovie(157336, getResponse);
//     console.log(movie);
//     document.getElementById("header").innerHTML = Header(movie);
//     document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//   }
//   catch(e){
//     console.log(e)
//   }

// })();

//2
// (() => {
//     let movie = fetchMovie(157336).then(movie => {
//         console.log(movie)
//         document.getElementById("header").innerHTML = Header(movie);
//         document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//     })

// })();

//3
(async () => {
    let movie = await fetchMovie(157336);
    // console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

(async() => {
  let netflixOriginals = await fetchNetflixOriginals();
  let container = document.querySelector(".moviesShowCase-container");
  let movies = netflixOriginals.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie__netflix";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();


(async() => {
  let trending = await fetchTrending();
  let container = document.querySelector(".moviesTrending-container");
  let movies = trending.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();

(async() => {
  let topRated = await fetchTopRated();
  let container = document.querySelector(".moviesTopRated-container");
  let movies = topRated.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();


(async() => {
  let genreMoviesAnimation = await fetchByGenreMovies(16);
  let container = document.querySelector(".moviesAnimation-container");
  let movies = genreMoviesAnimation.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();

(async() => {
  let genreMoviesComedy = await fetchByGenreMovies(35);
  let container = document.querySelector(".moviesComedy-container");
  let movies = genreMoviesComedy.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();

(async() => {
  let genreMoviesDoc = await fetchByGenreMovies(99);
  let container = document.querySelector(".moviesDoc-container");
  let movies = genreMoviesDoc.results;

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
  }    
})();


  (async() => {
    let filmsModal = await fetchModal();
    let films = document.getElementsByClassName('movies__container--movie')
    let movies = filmsModal.results;
  
    for(let i = 1 ; i < movies.length ; i++){
      films[i].addEventListener('click', ()=>{
        document.getElementById("modal").innerHTML = Modal(movie);
        document.getElementById("modal").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
      })
    }  
  })();