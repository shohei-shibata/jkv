import React from "react"
import * as contactFormStyles from "./contact-form.module.css"

const ContactForm = () => {
  return (
    <form action='/success' className={contactFormStyles.form} method='POST' name='contact-form'>
      <input type='hidden' name='form-name' value='contact-form' />
      <input 
        type="hidden" 
        name="subject" 
        value="JKV Engineering Website Contact Form" 
      />
      <label htmlFor="name">Name</label>
      <input name="name" type="text" required/>
      <label htmlFor="email">Email</label>
      <input name="email" type="email" required/>
      <label htmlFor="message">Message</label>
      <textarea name="message" rows="10" required/>
      <input name="submit" type="submit" value="Submit" className={`btn ${contactFormStyles.submitButton}`}/>
    </form>
  )
}

export default ContactForm