import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <header className='header-cont'>
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<HeroCarousel />} />
            <Route path='/products/all' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <div className='footer-cont'>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
