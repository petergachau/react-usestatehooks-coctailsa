import React from "react"

const contact = () => {
  return (
    
      <section className="contact-page">
        <article className="conact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mjvlkgdn"
  method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control">

              </input>
              <input type="email" name="email" placeholder="email" className="form-control">

               </input>
               <textarea name="message"
               rows="5"
               placeholder="message"
               className="form-control">

               </textarea>

            </div>
            <button type ="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    
  )
}

export default contact
