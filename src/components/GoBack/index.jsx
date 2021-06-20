import { Link } from "react-router-dom"
import './index.css'

const GoBack = () => {
  return (
    <nav aria-label="Main menu">
      <h2 className="visuallyhidden">Main menu</h2>
      <ul role="menubar" className="menu-bar">
        <li className="goback-conatiner" role="menuitem">
          <Link
            to="/"
            className="goback-link"
            aria-label="Go to home page"
            aria-describedby="homeLink"
          >
            go back
          </Link>
          <div
            className="visuallyhidden"
            id="homeLink"
          >
            Cliking on this link you will be redirected to the home page
          </div>    
        </li>
      </ul>
    </nav>
  )
}

export default GoBack
