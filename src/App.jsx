import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <header className='header-cont'>
        <NavBar />
      </header>
      <div className='hero-cont'>
        <HeroCarousel />
        <ItemListContainer greeting="Bienvenido a nuestra tienda" />
      </div>
      <ItemDetailContainer />
      <div className='footer-cont'>
        <Footer />
      </div>
    </>
  )
}

export default App
