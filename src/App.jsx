import './App.css'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

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
    </>
  )
}

export default App
