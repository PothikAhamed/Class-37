
import Container from '../common/Container'
import Flex from '../common/Flex'
import { FaCarSide } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const HeroBottom = () => {
  return (
    <div className='bg-[#FFFFFF] border-b border-[#F0F0F0] -mt-2 py-5 text-black'>
        <Container>
            <Flex className={"justify-between items-center"}>
                <div>
                    <span>2</span>
                    <span className='text-[#6D6D6D] text-[14px] ml-2'>Two years warranty</span>
                </div>
                <div className='flex items-center'>
                    <FaCarSide />
                    <p className='ml-2 text-[14px] text-[#6D6D6D]'>Free shipping</p>
                </div>
                <div className='flex items-center'>
                    <SlReload />
                    <p className='ml-2 text-[14px] text-[#6D6D6D]'>Return policy in 30 days</p>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default HeroBottom