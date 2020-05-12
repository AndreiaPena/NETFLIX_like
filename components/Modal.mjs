export default function Modal(props) {
    return `
        <div className="modal__container">
          <h1 className="modal__title">${props.original_title}</h1>
          <p className="modal__info">
            <span className="modal__note">Note: ${props.vote_average}%</span>
            Date de sortie: ${props.release_date}  Durée: ${props.runtime}m Episode: ${props.episode_run_time}
          </p>
          <p className="modal__description">${props.overview}</p>
        
        </div>
`
  }