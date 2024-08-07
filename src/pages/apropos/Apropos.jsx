import React from 'react'
import "./apropos.scss"
import Banner from './../../components/banner/Banner.jsx'
import bannerAbout from './../../assets/images/banner/bannerAbout.png'

export default function Apropos() {
  return (
    <div>
      <Banner image={bannerAbout}/>
    </div>
  )
}
