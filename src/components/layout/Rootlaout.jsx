import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Fotter from './Fotter'
import Midheader from './Midheader'
import Hero from './Hero'
import HeroBottom from './HeroBottom'

const Rootlaout = () => {
  return (
    <>
    <Header/>
    <Midheader/>
    <Hero/>
    <HeroBottom/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default Rootlaout