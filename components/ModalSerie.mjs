export default function ModalSerie(props) {
    return `
    
        <div class="modal__container">
        <button class="modal__container-close">
        &#10005
       </button>
          <h1 class="modal__title">${props.name || props.original_title}</h1>
          <p class="modal__info">
            <span class="modal__note">Note: ${props.vote_average}</span>
            Date de sortie: ${props.first_air_date || props.release_date} Durée: ${props.runtime || props.episode_run_time}min Episodes:${props.number_of_episodes} Saisons:${props.number_of_seasons}
          </p>
          <p class="modal__description">${props.overview}</p>
          <button class="modal__container-btnPlay">
           &#8227; PLAY
            </button>
    
            <button class="modal__container-btnFavouriteList">
             + MY LIST
            </button> <br>
            
        </div>
        
`
  }
