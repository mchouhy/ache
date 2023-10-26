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
      <BrowserRouter>
        <header className='header-cont'>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<HeroCarousel />} />
          <Route path='/products/all' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
        <div className='footer-cont'>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
