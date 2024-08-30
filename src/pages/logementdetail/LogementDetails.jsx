import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from "./../../components/carousel/Carousel"
import Collapse from './../../components/collapse/Collapse'
import Rating from './../../components/rating/Rating'
import Tag from './../../components/tag/Tag' 
import './logementdetail.scss'

export default function LogementDetails() {
  const {id} = useParams()
  const [logement , setLogement] = useState(null)
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/datas/data.json')
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas)
      const item = datas.find((element) => element.id === id)
        if (!item) {
          navigate("/error")
          return
        }
        setLogement(item)
    })
    .catch((error) => setError(error.message))

  }, []);

  if (!logement) {
    return <div>loading... </div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <Carousel imageSlider={logement.pictures} />
      <div className='info_container'>
        <div className='part_one'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className='tag_container'>
          {logement.tags.map((tag , index)=> (
            <Tag key={`${index}`} title={tag} />
          ))}
          </div>
        </div>
        <div className='part_two'>
          <div className='host'>
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt={logement.host.name}/>
          </div>
          <div className='rating'>
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className='appartment_collapse_container'>
        <Collapse title="Description" content={logement.description}/>
        <Collapse title="Équipements" content={logement.equipments}/>
      </div>
      
      </div>
  )
}