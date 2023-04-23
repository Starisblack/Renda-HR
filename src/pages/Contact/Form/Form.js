import "./Form.css"

import React from 'react'

const Form = () => {
  return (
     <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <textarea rows="4" placeholder="Your Message" ></textarea>
        <button type="submit" className="contact-send-btn">Send</button>
     </form>
  )
}

export default Form