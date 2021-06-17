import { Link } from "react-router-dom"
import './index.css'

const GoBack = () => {
  return (
    <nav aria-label="Main menu">
      <h2 className="visuallyhidden">Main menu</h2>
      <ul role="menubar">
        <li className="goback-conatiner" role="menuitem">
          <Link to="/" className="goback-link">go back</Link>    
        </li>
      </ul>
    </nav>
  )
}

export default GoBack
