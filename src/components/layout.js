import * as React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      <main id="page-top">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout

export const Head = () => (
  <>
    <title>JKV ENGINEERING</title>
  </>
)
