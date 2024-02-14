
import "../src/App.css"
import PropTypes from 'prop-types';
import { useState } from 'react'

const TwitterFollowCard = ({formatUserName, username="unknow", name }) => {
    const imageSrc = `https://unavatar.io/${username}`
    const altSrc = `Avatar de ${name}`
    const [follow, setFollow] = useState(false)

    const text = follow ? "Siguiendo" : "Seguir"
    const buttonClassName = follow ? "tw-followCard-button--following" : "tw-followCard-button--follow"


    const handleClick = () => {
        setFollow(!follow)
    }

    
  return (
      <article className="tw-followCard">
          <header className="tw-followCard-header">
              <img className="tw-followCard-avatar" src={imageSrc} alt={altSrc} />
              <div className="tw-followCard-info">
                  <strong>{name}</strong>
                  <span className="tw-followCard-infoUsername">{formatUserName(username)}</span>
              </div>
          </header>

          <aside>
              <button onClick={handleClick} className={buttonClassName}>{text}</button>
          </aside>
      </article>
  )
}


// Las propType son una forma de validar las props que recibe un componente es importante para saber que tipo de datos estamos recibiendo
// y si son requeridos o no
// en este caso estamos validando que formatUserName sea una función, username sea un string, name sea un string y isFollowing sea un booleano
// si no se cumple alguna de estas condiciones nos lanzará un error en consola
// es importante validar las props para evitar errores en el futuro
// en este caso estamos usando la librería prop-types que es una librería que nos permite validar las props de un componente
// https://www.npmjs.com/package/prop-types
// https://es.reactjs.org/docs/typechecking-with-proptypes.html


TwitterFollowCard.propTypes = {
    formatUserName: PropTypes.func.isRequired, 
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default TwitterFollowCard