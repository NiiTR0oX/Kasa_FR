import React from 'react'
import './banner.scss'

export default function Banner({image , title}) {
  return (
    <div className='banner_container'>
        <div className='banner_background'>
            <img src={image} alt="image de fond pour la bannière"/>
            { !title ? "" : <h1>{title}</h1> }
        </div>
    </div>
  )
}
