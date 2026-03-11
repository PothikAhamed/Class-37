
import Container from '../common/Container'
import Flex from '../common/Flex'
import  Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className=' bg-[#FFFFFF] py-5 top-0 text-[14px]'>
        <Container>
            <Flex className={"justify-between"}>
                <div className='w-[40%]'>
                    <img className='w-25' src={Logo} alt={Logo} />
                </div>
                <div className='w-[60%] text-[#767676]'>
                    <ul className='flex items-center gap-x-10'>
                        <li className='hover:text-black duration-300 font-normal hover:font-bold'><NavLink className={({isActive})=> isActive? `font-bold text-black`:``} to={'/home'}>Home</NavLink></li>
                        <li className='hover:text-black duration-300 font-normal hover:font-bold'><NavLink className={({isActive})=> isActive? `font-bold text-black`:``} to={'/shop'}>Shop</NavLink></li>
                        <li className='hover:text-black duration-300 font-normal hover:font-bold'><NavLink className={({isActive})=> isActive? `font-bold text-black`:``} to={'/about'}>About</NavLink></li>
                        <li className='hover:text-black duration-300 font-normal hover:font-bold'><NavLink className={({isActive})=> isActive? `font-bold text-black`:``} to={'/contact'}>Contacts</NavLink></li>
                    </ul>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header