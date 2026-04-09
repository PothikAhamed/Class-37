import React from 'react'
import catProduct from '/src/assets/product-1.png'

const Badge = ({badgeName, className}) => {
  return (
    <div className={`bg-[#262626] text-white py-3 px-8 w-22.5 ${className}`}>
        {badgeName}
        <div className=''></div>
        </div>
  )
}

export default Badge




{/* <div
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
            </div> */}



  //             useEffect(() => {
  //   async function alldata(params) {
  //     let data = await axios.get("https://dummyjson.com/products");
  //     setAllData(data.data.products);
  //   }
  //   alldata();
  // }, []);



//     const NextArrow = ({ onClick }) => {
//   return (
//     <div
//       className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       <HiOutlineArrowRight />
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div
//       className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       <HiOutlineArrowLeft />
//     </div>
//   );
// };
