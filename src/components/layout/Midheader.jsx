import Container from "../common/Container";
import Flex from "../common/Flex";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Midheader = () => {
  return (
    <div className=" bg-[#F5F5F3] py-8 border-[#979797] border-y">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center gap-2 text-black">
            <HiMiniBars3BottomLeft className="text-[18px]" />
            <p>Shop by Category</p>
          </div>
          <div>
            <label className="input w-100">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
          <div className="text-black flex items-center gap-x-6">
            <div className="flex items-center">
              <FaUser />
              <FaCaretDown />
            </div>
            <FaShoppingCart />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Midheader;
