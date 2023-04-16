import "./Testimonial.css"

import React from 'react'
import TestimonialCard from "./TestimonialCard/TestimonialCard"

const Testimonial = () => {
  return (
     <section id="testimonial">
     <div className="testimonial-container">
      <div className="shape"></div>
      <h2>Don’t just take our word for it 😍</h2>

      <TestimonialCard />
      </div>
      
     </section>
  )
}

export default Testimonial