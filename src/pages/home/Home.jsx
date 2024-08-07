import Banner from './../../components/banner/Banner.jsx'
import './home.scss'
import bannerHome from "./../../assets/images/banner/homeBanner.png"

function Home() {
  return (
    <div id="root">
      
      <main className="home-content">
        <Banner image={bannerHome} title="Chez vous, partout et ailleurs"/> 
      </main>
      
    </div>
  )
}

export default Home 
