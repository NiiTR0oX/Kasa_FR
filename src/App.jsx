import { BrowserRouter , Routes , Route } from "react-router-dom";
import './App.scss'
import Home from "./pages/home/Home.jsx"
import Apropos from "./pages/apropos/Apropos.jsx"
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import LogementDetails from "./pages/logementdetail/LogementDetails.jsx";
import Error from "./pages/error/Error.jsx"

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/a-propos" element={<Apropos/>} />
        <Route path="/logmentdetail" element={<LogementDetails/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
