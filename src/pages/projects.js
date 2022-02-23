import React from "react"
import { Link } from 'react-router-dom'


import project from "../constants/project"
import Title from "../components/Title"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  return (
  
      <section className="section bg-grey">
      <Title title="projects" />
      <div className="section-center services-center">
        {project.map(project => {
          const { id,  title, text,url } = project
          return (
            <article key={id} className="service">
              
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
              <a href={url}>Visit</a> 
            </article>
          )
        })}
      </div>
      < Link to = "/" className="btn">
           home
         </Link>
    </section>
    
    
      
    
    
  )
}



export default ProjectsPage
