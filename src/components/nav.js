import React, { useState } from "react"
import { Link } from "gatsby"
import { topBar, desktopNav, mobileNav, open, closed, openButton, closeButton, navBtnWrapper } from "./nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/logo.svg"

const navItems = {
  desktop: [
    {
      url: "/about",
      name: "About"
    },
    {
      url: "/projects",
      name: "Projects"
    },
    {
      url: "/team",
      name: "Our Team"
    },
    {
      url: "/contact",
      name: "Contact"
    },
  ],
  mobile: [
    { url: "/",
      name: "Home"
    },
    {
      url: "/about",
      name: "About"
    },
    {
      url: "/projects",
      name: "Projects"
    },
    {
      url: "/team",
      name: "Our Team"
    },
    {
      url: "/contact",
      name: "Contact"
    },
  ],
}

const Nav = () => {
  const [ mobileNavOpen, setMobileNavOpen ] = useState(false)
  const toggleNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }
  return (
    <nav>
      <div className={topBar}>
        <Link to="/">
          <img src={logo} height={75}/>
        </Link>
        <ul className={desktopNav}>
          {navItems.desktop.map(item => <li><Link to={item.url}>{item.name}</Link></li>)}
        </ul>
        <div className={ mobileNavOpen ? `${mobileNav} ${open}` : `${mobileNav} ${closed}`}>
          { mobileNavOpen ? 
            <>
              <ul>
                {navItems.mobile.map(item => <li><Link to={item.url} onClick={toggleNav}>{item.name}</Link></li>)}
              </ul>
            </>
            : null
          }
          <div className={navBtnWrapper}>
            { mobileNavOpen ?
              <FontAwesomeIcon icon={faXmark} className={closeButton} onClick={toggleNav}>X</FontAwesomeIcon>
              :
              <FontAwesomeIcon icon={faBars} className={openButton} onClick={toggleNav}>X</FontAwesomeIcon>
            }
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Nav