import React from 'react'
import "./header.scss"

export default function Header() {
  return (
    <header>
      <div class="containernav">
              <a href="#">
                <img src="./images/logo/logo_footer.png" alt="KASA"/>
              </a>
              <nav class="main-nav">
                  <ul>
                      <li>
                          <a href="#Acceuil">Acceuil</a>
                      </li>
                      <li>
                          <a href="#A Propos">A Propos</a>
                      </li>
                  </ul>
              </nav>

            </div>
      </header>
  )
}
