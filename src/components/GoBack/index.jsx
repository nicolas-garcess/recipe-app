import { Link } from "react-router-dom"
import './index.css'

const GoBack = () => {
  return (
    <div className="goback-conatiner">
      <Link to="/" className="goback-link">go back</Link>    
    </div>
  )
}

export default GoBack
