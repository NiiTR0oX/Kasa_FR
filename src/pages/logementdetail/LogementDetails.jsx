import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from "./../../components/carousel/Carousel"
import Collapse from '../../components/collapse/collapse'
import Rating from './../../components/rating/rating'
import Gallery from '../../components/gallery/Gallery'

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
      <Collapse title="Description" content={logement.description}/>
      <Collapse title="Équipements" content={logement.equipments}/>
      <Rating rating={Rating} />
    </div>
  )
}


// mise en forme le toute les pages 
// faire tout le responsive
// composent rating et la mise en forme 