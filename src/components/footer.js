import * as React from 'react'
import { Link } from 'gatsby'
import { footer, footerLinks, credits } from './footer.module.css'

const links = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Engineering",
    url: "/engineering"
  },
  {
    name: "Prototyping",
    url: "/prototyping"
  },
  {
    name: "Our Team",
    url: "/our-team"
  },
  {
    name: "Contact Us",
    url: "/contact"
  },
]

const Footer = () => {
  return (
    <footer className={footer}>        
      <div className={footerLinks}>
        <ul>
          {links.map(link => (
            <li key={link.url}><Link to={link.url}>{link.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className={credits}>© JKV Engineering 2023</div>
    </footer>
  )
}

export default Footer