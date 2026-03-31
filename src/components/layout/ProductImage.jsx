import React, { useState } from "react";
import Badge from "./Badge";
import Flex from "../common/Flex";
import { FcLike } from "react-icons/fc";
import { HiRefresh } from "react-icons/hi";

const ProductImage = () => {
    let [count, setCount]=useState(0)
    const increment= () =>{
        if(count >= 5) return
            setCount(count +1)
        
    }
    const decrement = () =>{
        if (count <= 0) return
        setCount(count -1)
    }
  return (
    <>
      <h1 className="text-4xl text-black font-semibold">New Arrivals</h1>
      <Flex className={"justify-between mt-5"}>
        <div>
          <div className="bg-[url(/src/assets/product-1.png)] p-5 w-80 h-90">
            <Badge badgeName={"New"} />
          </div>
          <div className="flex justify-between mt-2">
            <h2 className="text-[16px] text-[#262626]">Basic Crew Neck Tee</h2>
            <p className="text-[#767676] text-[14px]">$44.00</p>
          </div>
          <p className="text-[14px] text-[#767676]">Black</p>
        </div>
        <div>
          <div className="bg-[url(/src/assets/product-2.png)] p-5 w-80 ml-3 h-90">
            <Badge badgeName={"New"} />
          </div>
          <div className="flex justify-between  ml-3.5 mt-2">
            <h2 className="text-[16px] text-[#262626]">Basic Crew Neck Tee</h2>
            <p className="text-[#767676] text-[14px]">$44.00</p>
          </div>
          <p className="ml-3.5 text-[14px] text-[#767676]">Black</p>
        </div>
        <div>
          <div className="bg-[url(/src/assets/product-3.png)] p-5 w-80 ml-3 h-90">
            <Badge badgeName={"5%"} />
          </div>
          <div className="flex justify-between  ml-3.5 mt-2">
            <h2 className="text-[16px] text-[#262626]">Basic Crew Neck Tee</h2>
            <p className="text-[#767676] text-[14px]">$44.00</p>
          </div>
          <p className="ml-3.5 text-[14px] text-[#767676]">Black</p>
        </div>
        <div>
          <div className="bg-[url(/src/assets/product-4.png)] p-5 w-85 ml-3 h-90 relative">
            <Badge badgeName={"10%"} />
          </div>
          <div className="flex justify-between  ml-3.5 mt-2">
            <h2 className="text-[16px] text-[#262626]">Basic Crew Neck Tee</h2>
            <p className="text-[#767676] text-[14px]">$44.00</p>
          </div>
          <p className="ml-3.5 text-[14px] text-[#767676]">Black</p>
          <div className="bg-[#FFFFFF] h-30 w-85 ml-3 absolute -mt-42">
            <div className="flex text-[14px] text-[#767676] items-center mt-3 gap-x-2 ml-45">
            <p className="text-right">Add to Wish list</p>
             <FcLike className="text-right text-2xl" />
            </div>
            <div className="flex text-[14px] text-[#767676] items-center mt-3 gap-x-2 ml-55">
                <p className="text-right">Conpare</p>
                <HiRefresh className="text-right text-2xl" />
            </div>
            <div className="text-black text-right flex items-center mt-1">
                <h3 className="px-5 py-1 ml-5 bg-red-500 rounded-2xl font-bold text-16 text-white">{count}</h3>
                <button onClick={increment} className="bg-gray-300 rounded-[5px] h-7 w-15 font-bold text-[20px] ml-20 cursor-pointer">+</button>
                <button onClick={decrement} className="bg-gray-300 rounded-[5px] h-7 w-15 font-bold text-[20px] ml-10 cursor-pointer">-</button>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default ProductImage;
