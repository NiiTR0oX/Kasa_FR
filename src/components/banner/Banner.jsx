import React from 'react'

export default function Banner({image , title}) {
  return (
    <div className='banner__container'>
        <div className='banner__background'>
            <img src={image} alt="image de fond pour la bannière"/>
            { !title ? "" : <h1>{title}</h1> }
        </div>
    </div>
  )
}
