import Container from '../common/Container'
import Flex from '../common/Flex'
import bg from '../../assets/slider-1 1.png'

const Hero = () => {
  return (
    <div id='heroSection' style={{backgroundImage: `url(${bg})`}} className=' py-35'>
      <Container>
        <Flex>
          <div className='py-[120px] text-[#262626] '>
            <h1 className='text-5xl'>Final Offer</h1>
            <div className='mt-10 flex items-center'>
              <span className='text-[#6D6D6D]'>Up to</span> <span className='text-3xl font-semibold'>50%</span> <span className='text-[#6D6D6D]'>sale for all furniture items!</span>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Hero