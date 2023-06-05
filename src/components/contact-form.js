import React from "react"
import * as contactFormStyles from "./contact-form.module.css"

const ContactForm = () => {
  return (
    <form 
      id="contact-form" 
      action='/success' 
      className={contactFormStyles.form} 
      method='POST' 
      name='contact-form'
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input type='hidden' name='form-name' value='contact-form' />
      <input 
        type="hidden" 
        name="subject" 
        value="contact-form" 
      />
      <label htmlFor="name" className={contactFormStyles.label}>Name</label>
      <input name="name" type="text" required/>
      <label htmlFor="email" className={contactFormStyles.label}>Email</label>
      <input name="email" type="email" required/>
      <label htmlFor="message" className={contactFormStyles.label}>Message</label>
      <textarea name="message" rows="10" required/>
      <input name="submit" type="submit" value="Submit" className={`btn btn-yellow ${contactFormStyles.submitButton}`}/>
    </form>
  )
}

export default ContactForm