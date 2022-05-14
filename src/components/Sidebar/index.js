import './index.scss'
import logoraq from '../../assets/images/logo-raq.jpg'
import freitas from '../../assets/images/freitas.jpg'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      
      <Link className="logo" to="/">
        
        <img src={logoraq} alt="Logo" className='logoraquel' />
        
        <img className="freitas" src={freitas} alt="freitas" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      
    
    </div>
  )
}

export default Sidebar
