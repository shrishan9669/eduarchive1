import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/header'
import Login from './pages/login'
import Signup from './pages/signup'

import Home from './pages/home'
import Footer from './components/footer'
import Show from './pages/show'

function App() {
  

  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
     
      <BrowserRouter>
       <Routes>
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/' element = {<Home/>} />
         <Route path='/show' element = {<Show/>} />
       </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
