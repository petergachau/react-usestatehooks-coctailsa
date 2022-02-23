import React from "react"
import { Link }  from 'react-router-dom'
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
// import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
      <Link to ="/">
        <img src={logo} alt="cocktail db log"
        className="logo"></img>
      </Link>
      <ul className = "nav-links">
        <li>
          <Link to= "/">
            Home
          </Link>
         </li>
         <li>
           <Link to = "/About">
             about
           </Link>
           

         </li>
         <li>
         <Link to = "/ProjectPage">
             Projects
           </Link>
         </li>
      </ul>
      </div>
      
    </nav>
    
  )
}

export default Navbar
