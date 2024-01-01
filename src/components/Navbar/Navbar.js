import { NavLink } from 'react-router-dom'
import '../../style/Navbar.scss'
import HomeLogo from '../../assets/HomeLogo.svg'

function Navbar() {
  return (
    <div className="navbar">
      <img src={HomeLogo} alt="Logo du site" className="navbar__logo" />
      <div className="navbar__links">
        <NavLink
          to="/Projet-4/"
          activeclassname="active"
          className="navbar__links--link"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/Projet-4/About"
          activeclassname="active"
          className="navbar__links--link"
        >
          A propos
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
