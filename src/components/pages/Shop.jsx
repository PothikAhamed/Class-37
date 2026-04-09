import Container from "../../components/common/Container";
import Flex from "../common/Flex";
import { FaAngleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import productOne from "../../assets/product-1.png";
import productTwo from "../../assets/product-2.png";
import productThree from "../../assets/product-3.png";
import productFore from "../../assets/product-4.png";
import productFive from "../../assets/product-5.png";
import productSix from "../../assets/product-6.png";
import productSeven from "../../assets/product-7.png";
import productWeigh from "../../assets/product-8.png";
import productNine from "../../assets/product-9.png";

const Shop = () => {
  return (
    <div className="py-25 bg-white">
      <Container>
        <div className="text-black pt-10 pb-30">
          <h1 className="text-5xl font-semibold">Products</h1>
          <Flex className={"py-5 gap-x-3 text-[#767676]"}>
            <div className="flex items-center">
              <span>Shop</span>
              <FaAngleRight />
            </div>
            <p>Product</p>
          </Flex>
        </div>
        <div className={"gap-x-2 flex"}>
          <div className="w-1/3 text-[#767676]">
            <p className="py-2 text-[25px] font-semibold flex">
              Shop by Category
            </p>
            <div className="flex items-center justify-between py-3 border-b">
              <p>Category 1</p>
              <FaPlus className="text-[12px]" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <p>Category 2</p>
              <FaPlus className="text-[12px]" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <p>Category 3</p>
              <FaPlus className="text-[12px]" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <p>Category 4</p>
              <FaPlus className="text-[12px]" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <p>Category 5</p>
              <FaPlus className="text-[12px]" />
            </div>
          </div>
          <div>

          </div>
          <div>
            <div className="w-2/2 ml-8">
              <Flex className={"justify-between items-center gap-x-6"}>
                <div className="w-70 text-black">
                  <img src={productNine} alt={productNine} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
                <div className="w-70 text-black relative group: z-0">
                  <img src={productWeigh} alt={productWeigh} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
                <div className="w-70 text-black">
                  <img src={productThree} alt={productThree} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
              </Flex>
              <Flex className={"justify-between items-center gap-x-6 mt-9"}>
                <div className="w-70 text-black">
                  <img src={productFore} alt={productFore} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
                <div className="w-70 text-black">
                  <img src={productFive} alt={productFive} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
                <div className="w-70 text-black">
                  <img src={productSix} alt={productSix} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
              </Flex>
              <Flex className={"justify-between items-center gap-x-6 mt-9"}>
                <div className="w-70 text-black">
                  <img src={productTwo} alt={productTwo} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
                <div className="w-70 text-black">
                  <img src={productSeven} alt={productSeven} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
                <div className="w-70 text-black">
                  <img src={productOne} alt={productOne} />
                  <div className="flex items-center text-[14px] justify-between mt-5">
                    <p>Basic Crew Neck Tee</p>
                    <p className="text-[#767676]">$44.00</p>
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
