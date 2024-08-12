import Banner from './../../components/banner/Banner.jsx'
import './home.scss'
import bannerHome from "./../../assets/images/banner/homeBanner.png"
import React, { useState, useEffect } from 'react';

function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Définir la fonction fetch
    const fetchData = async () => {
      try {
        const response = await fetch('./datas/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Appeler la fonction fetch
    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }
  return (
    <div id="root">
      
      <main className="home-content">
        <Banner image={bannerHome} title="Chez vous, partout et ailleurs"/>
        <div>
          {data.map((logement)=> (
            <Link key={logement.id} to={`/logementDetails/${id}`}>
               <Card cover={logement.cover} title={logement.title}/>

            </Link>

          ))}
        </div>
            
      </main>
      
    </div>
  )
}

export default Home 
