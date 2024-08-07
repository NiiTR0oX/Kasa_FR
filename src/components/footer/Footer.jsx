import React from 'react'
import "./footer.scss"
import logo from "./../../assets/images/logo/logo_footer.png"

export default function Footer() {
  return (
    <footer className="footer_container">
      <div>
        <img src={logo} alt="logo"></img>
      </div>
        <a href='#'>© 2020 Kasa. All rights reserved.</a>
      </footer>
  )
}
