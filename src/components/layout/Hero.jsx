import Container from '../common/Container'
import Flex from '../common/Flex'
import bg from '../../assets/slider-1 1.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
      onClick={onClick}
    >
      <HiOutlineArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
      onClick={onClick}
    >
      <HiOutlineArrowLeft />
    </div>
  );
};

const Hero = () => {
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
return (
  <div className="relative">
    <Slider {...settings} className='-mt-0.5'>
      <div>
        <div className="bg-[url(/src/assets/Intro.png)] h-150 bg-no-repeat bg-center"></div>
      </div>  
      <div>
        <div className="bg-[url(/src/assets/Intro.png)] h-150 bg-no-repeat bg-center"></div>
      </div>  
      <div>
        <div className="bg-[url(/src/assets/Intro.png)] h-150 bg-no-repeat bg-center"></div>
      </div>  
      <div>
        <div className="bg-[url(/src/assets/Intro.png)] h-150 bg-no-repeat bg-center"></div>
      </div>  
    </Slider>
  </div>
);
};
    // <div id='heroSection' style={{backgroundImage: `url(${bg})`}} className=' py-35'>
    //   <Container>
    //     <Flex>
    //       <div className='py-[120px] text-[#262626] '>
    //         <h1 className='text-5xl'>Final Offer</h1>
    //         <div className='mt-10 flex items-center'>
    //           <span className='text-[#6D6D6D]'>Up to</span> <span className='text-3xl font-semibold'>50%</span> <span className='text-[#6D6D6D]'>sale for all furniture items!</span>
    //         </div>
    //       </div>
    //     </Flex>
    //   </Container>
    // </div>


export default Hero