import './App.css'
import Home from './pages/HomeCar/HomeCar'
import Passenger from "./pages/Passenger/Passenger"
import Driver from './pages/Driver/Driver'
import About from './pages/AboutSteal/AboutSteal'
import {NavBar2} from "./components/NavBar2"
// import {Footer} from "./components/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import HomeSteal from './pages/HomeSteal.jsx/HomeSteal'
import Store from './pages/Store/Store'
import HomeHouse from './pages/HomeHouse/HomeHouse'
import Checkout from './pages/Checkout/Checkout'
import AdminPage from './pages/Admin/Admin'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import SideBarCar from './components/SideBarCar'
import LandingPage from './pages/LandingPage/LandingPage'
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar2 />
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/homecar' element={<Home/>}/>
        <Route path='/driver' element={<Driver/>}/>
        <Route path='/passenger' element={<Passenger/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/store'  element={<Store/>}/>
        <Route path='/admin'  element={<AdminPage/>}/>
        <Route path='/checkout'  element={<Checkout/>}/>
        <Route path='/homesteal'  element={<HomeSteal/>}/>
        <Route path='/homehouse'  element={<HomeHouse/>}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
