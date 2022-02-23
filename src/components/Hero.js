import React from "react"
import { Link } from 'react-router-dom'
import SocialLinks from "../constants/socialLinks"
import Big from "../assets/Big.jpg"
import contact from "../pages/contact"

const Hero = () => {
 
  return <header className="hero">
    <div className=" section-center hero-center">
      <article className="hero-info">
      <div>
         <div className = "underline"></div>
         <h1>i`m peter</h1>
         <h4>full stack web developer and a data scientist</h4>
        <img className="hero-img" src={Big} alt ="port"/>
         < Link to = "/contact" className="btn">
           contact me 
         </Link>
         <SocialLinks/>
         </div> 
      </article>
      
    </div>
  </header>
}

export default Hero
