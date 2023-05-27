import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from './footer'
import { nav, main } from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <nav className={nav}>
        <Link to="/"><StaticImage src="../images/logo-nav.png" height={75}/></Link>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className={main}>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
