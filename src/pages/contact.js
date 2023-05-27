import React from "react"
import { Link } from "gatsby"
import SectionTitle from "../components/section-title"
import ContactForm from "../components/contact-form"

const ContactPage = () => {
  return (
    <>
      <div className="content-wrapper-default-width page-content-wrapper">
        <SectionTitle>Contact Us</SectionTitle>
        <p>Please use the form below to send us a message.</p>
        <ContactForm/>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default ContactPage