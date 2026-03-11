import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Rootlaout from './components/layout/Rootlaout'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Rootlaout/>}>
        <Route index element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
