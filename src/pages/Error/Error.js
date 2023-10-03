import { Link } from 'react-router-dom'
import '../../style/Error.scss'

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__new">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="error__home">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  )
}
export default Error
