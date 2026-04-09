import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Midheader from './Midheader'
import Fotter from './Fotter'
import Hero from './Hero'
import Home from '../pages/Home'

const Rootlaout = () => {
  return (
    <>
    <Header/>
    <Midheader/>
    <Home/>
    <Fotter/>
    </>
  )
}

export default Rootlaout