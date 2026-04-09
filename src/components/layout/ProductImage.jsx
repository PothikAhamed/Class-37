import React, { useState, useEffect } from "react";
import Badge from "./Badge";
import Flex from "../common/Flex";
import { FcLike } from "react-icons/fc";
import { HiRefresh } from "react-icons/hi";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

const ProductImage = () => {
  let [count, setCount] = useState(0);
  const increment = () => {
    if (count >= 5) return;
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldata(params) {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldata();
  }, []);
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  };

const getRandomBadge = () => {
  const badges = ["New", "Sale", "Hot", "-10%"];
  return badges[Math.floor(Math.random(1) * badges.length)];
};

  return (
    <>
      <h1 className="text-4xl text-black font-semibold">New Arrivals</h1>
      <Slider {...settings} className="-mt-0.5">
        {allData.slice(0, 10).map((item) => (
          <div className="group relative">
            <div className="w-85 h-full bg-[#ededed] overflow-hidden">
              <div className="p-5">
                <Badge badgeName={getRandomBadge(1)} />
              </div>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div
              className=" absolute bottom-0 left-0 w-full mb-13 bg-white p-3 opacity-0 translate-y-10 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 ">
              <div className="flex justify-end items-center gap-2 text-sm text-gray-600">
                <p>Add to Wishlist</p>
                <FcLike className="text-xl" />
              </div>
              <div className="flex justify-end items-center gap-2 text-sm text-gray-600 mt-2">
                <p>Compare</p>
                <HiRefresh className="text-xl" />
              </div>
              <div className="flex items-center justify-end mt-2 gap-2">
                <h3 className="px-3 py-1 bg-red-500 rounded-xl text-white font-bold">
                  {count}
                </h3>
                <button onClick={increment}className="bg-gray-300 px-3 rounded cursor-pointer">+</button>
                <button onClick={decrement}className="bg-gray-300 px-3 rounded cursor-pointer">-</button>
              </div>
            </div>
            <div className="flex justify-between mt-2 px-2">
              <h2 className="text-[16px] text-[#262626]">{item.title}</h2>
              <p className="text-[#767676] text-[14px]">${item.price}</p>
            </div>
            <p className="px-2 text-[14px] text-[#767676]">{item.brand}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProductImage;
