import * as React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout

export const Head = () => (
  <>
    <meta name="robots" content="noindex"></meta>
    <title>JKV ENGINEERING</title>
  </>
)
