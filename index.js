import {fetchMovie} from "./apiService.js";
import Header from "./components/Header.mjs";
import ModalSerie from "./components/ModalSerie.mjs";
import {fetchNetflixOriginals} from "./apiService.js";
import {fetchTrending} from "./apiService.js";
import {fetchTopRated} from "./apiService.js";
import {fetchByGenreMovies} from "./apiService.js";
import {fetchModal} from "./apiService.js";
import {fetchSearch} from "./apiService.js";




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
  console.log(movies)

  for(let i = 1 ; i < movies.length ; i++){
    let movie = document.createElement('div');
    movie.className = "movies__container--movie__netflix";
    let image = document.createElement('img');
    image.className = "movies__container--movie-image";
    image.src = `https://image.tmdb.org/t/p/original/${movies[i].poster_path}`;
    container.appendChild(movie);
    movie.appendChild(image);
    let id = movies[i].id;

    let filmsModal = await fetchModal(id);
    let modal = document.querySelector('.modal')
    
      image.addEventListener('click', ()=>{
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.innerHTML = ModalSerie(filmsModal);
        modal.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
        modal.style.backgroundSize = `cover`; 
        let button = modal.querySelector('.modal__container-close');
          button.addEventListener('click', (event) => {
              event.preventDefault();
              let test = modal.querySelector('.modal__container');
              modal.style.backgroundImage = 'none' ;
              modal.classList.remove('show')
              modal.classList.add('hide')
          });
        })
      
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
    let id = movies[i].id;

    let filmsModal = await fetchModal(id);
    let modal = document.querySelector('.modal')
    
      image.addEventListener('click', ()=>{
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.innerHTML = ModalSerie(filmsModal);
        modal.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
        modal.style.backgroundSize = `cover`;
        let button = modal.querySelector('.modal__container-close');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            let test = modal.querySelector('.modal__container');
            modal.style.backgroundImage = 'none' ;
            modal.classList.remove('show')
            modal.classList.add('hide')
          });
        })
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
    let id = movies[i].id;

    let filmsModal = await fetchModal(id);
    let modal = document.querySelector('.modal')
    
      image.addEventListener('click', ()=>{
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.innerHTML = ModalSerie(filmsModal);
        modal.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
        modal.style.backgroundSize = `cover`;
        let button = modal.querySelector('.modal__container-close');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            let test = modal.querySelector('.modal__container');
            modal.style.backgroundImage = 'none' ;
            modal.classList.remove('show')
            modal.classList.add('hide')
          });
        })
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
    let id = movies[i].id;

    let filmsModal = await fetchModal(id);
    let modal = document.querySelector('.modal')
    
      image.addEventListener('click', ()=>{
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.innerHTML = ModalSerie(filmsModal);
        modal.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
        modal.style.backgroundSize = `cover`;
        let button = modal.querySelector('.modal__container-close');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            let test = modal.querySelector('.modal__container');
            modal.style.backgroundImage = 'none' ;
            modal.classList.remove('show')
            modal.classList.add('hide')
          });
        })
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
    let id = movies[i].id;

    let filmsModal = await fetchModal(id);
    let modal = document.querySelector('.modal')
    
      image.addEventListener('click', ()=>{
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.innerHTML = ModalSerie(filmsModal);
        modal.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
        modal.style.backgroundSize = `cover`;
        let button = modal.querySelector('.modal__container-close');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            let test = modal.querySelector('.modal__container');
            modal.style.backgroundImage = 'none' ;
            modal.classList.remove('show')
            modal.classList.add('hide')
          });
        })
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
    let id = movies[i].id;

    let filmsModal = await fetchModal(id);
    let modal = document.querySelector('.modal')
    
      image.addEventListener('click', ()=>{
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.innerHTML = ModalSerie(filmsModal);
        modal.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
        modal.style.backgroundSize = `cover`;
        let button = modal.querySelector('.modal__container-close');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            let test = modal.querySelector('.modal__container');
            modal.style.backgroundImage = 'none' ;
            modal.classList.remove('show')
            modal.classList.add('hide')
          });
        })
  }    
})();


// var  timerId;
const recherche = document.querySelector('.navigation__container--left__input');
// function  makeAPICall() {
recherche.addEventListener('input', async(event) => {
   
    const searchString = event.target.value.toLowerCase();
    let movieList = await fetchSearch(searchString)
    let movieResult = movieList.results
    let tutu = document.querySelector('.search-container')
    tutu.innerHTML =''
    let toto = document.querySelector('.container')

    if(searchString.length >= 1){
      toto.classList.add('hide')
    
    for(let i = 1 ; i < movieResult.length ; i++){
      let movie = document.createElement('div');
      movie.className = "movies__container--movie_search";
      let image = document.createElement('img');
      image.className = "movies__container--movie-image";
      image.src = `https://image.tmdb.org/t/p/w500/${movieResult[i].poster_path}`;
      tutu.appendChild(movie);
      movie.appendChild(image);
      if (movieResult[i].poster_path === null) {
        image.style.display = 'none';
    }
    }}else{
      toto.classList.remove('hide')
    }
     
}); 
// }

// var  debounceFunction  =  function (func, delay) {
// 	// Cancels the setTimeout method execution
// 	clearTimeout(timerId)

// 	// Executes the func after delay time.
// 	timerId  =  setTimeout(func, delay)
// }


