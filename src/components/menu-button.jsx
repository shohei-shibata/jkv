import * as React from "react"
import { Link } from "gatsby"
import MenuIcon from "../icons/menu"
import { menuButton, badge } from "./menu-button.module.css"
import CrossIcon from "../icons/cross"

export function MenuButton({ onMenuToggle, open }) {
  return (
    <button
      aria-label={`Button to open the mobile navigation`}
      onClick={() => onMenuToggle()}
      className={menuButton}
    >
      { open ? 
        <CrossIcon />
        :
        <MenuIcon />
      }
    </button>
  )
}