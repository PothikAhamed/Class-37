import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import adOne from '../../assets/addOne.jpg'
import adTwo from '../../assets/adTwo.jpg'
import adTree from '../../assets/adTree.png'

const Products = () => {
  return (
    <div className='py-30 bg-white text-black'>
        <Container className={"justify-baseline"}>
        <Flex>
            <div className="">
                <img src={adOne} alt="adOne" />
            </div>
            <div className="ml-7">
                <img src={adTwo} alt="adTwo" />
                <img src={adTree} alt="adTree" className='mt-6.5' />
            </div>
        </Flex>
        </Container>
    </div>
  )
}

export default Products