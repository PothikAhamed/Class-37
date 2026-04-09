import { Outlet } from "react-router"
import Arrivals from "../layout/Arrivals"
import Hero from "../layout/Hero"
import HeroBottom from "../layout/HeroBottom"
import Products from "../layout/Products"


const Home = () => {
  return (
    <>
    {/* <Outlet/> */}
    <Hero/>
    <HeroBottom/>
    <Arrivals/>
    </>
  )
}

export default Home