import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faDiagramProject,
  faAt,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoA} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Abin Thomas" />
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="project-link"
            to="/project"
          >
            <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="blog-link"
            to="/blog"
          >
            <FontAwesomeIcon icon={faKeyboard} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/abin-thomas-89361b25b"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/a-box31"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/a_box_31/"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/thomaa2031"
            >
              <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:thomaa2031@gmail.com"
            >
              <FontAwesomeIcon icon={faAt} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
