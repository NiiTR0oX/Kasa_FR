import React from 'react'
import "./apropos.scss"
import Banner from './../../components/banner/Banner.jsx'
import bannerAbout from './../../assets/images/banner/bannerAbout.png'
import Collapse from '../../components/collapse/collapse.jsx'

export default function Apropos() {
  return (
    <div>
      <Banner image={bannerAbout}/>
      <div className='about_collapse_container'>
        <Collapse title="Fiabilité" content="" />
        <Collapse title="Respect" content="" />
        <Collapse title="Service" content="" />
        <Collapse title="Sécurité" content="" />
      </div>
    </div>
  )
}
