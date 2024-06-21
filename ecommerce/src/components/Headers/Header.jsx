import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [showNev , setNev] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [nev, setnev] = useState(false);
  return (
    <header className={`${scrolled ? "" : "fixed "} duration-300 w-full z-10 `}>
      <div className="bg-black py-4 text-[14px] sm:text-[16px] w-full text-white  flex flex-wrap">
        <div className="flex flex-wrap text-center justify-center m-auto gap-5 md:gap-9">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="underline" href="#">
            Shop Now
          </a>
        </div>
        <div className=" hidden md:block">
          <select
            className="bg-inherit  focus:outline-none text-center"
            name=""
            id=""
          >
            <option value="#">English</option>
            <option value="#">Hindi</option>
          </select>
        </div>
      </div>
      <nav className={`flex ${scrolled ? "fixed top-0" : "top-[5%]"} bg-white duration-300  w-full  flex-wrap justify-between  sm:flex-nowrap items-center border-b py-5`}>
        <div className="sm:w-[20%] ps-4 sm:ps-0 sm:order-1 text-[35px] text-center font-semibold">
          <h1>Exclusive</h1>
        </div>
        <div  onClick={()=>{setNev(!showNev)}} className="block  lg:hidden sm:order-3  pe-4 text-[35px]">
          <IoMenu />
        </div>
        <div className={`${(showNev ? "end-0" : "end-[-100%] lg:end-0")} duration-300 lg:w-[40%]  absolute w-[80%] md:w-[35%] bg-neutral-200 lg:bg-inherit h-screen lg:h-fit  top-full  order-2 lg:relative`}>
          <ul className="flex flex-col gap-[60px] mt-9 lg:mt-0 lg:gap-0 lg:flex-row w-full text-[18px] items-center justify-around">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Contact</li>
            <li className="hover:underline">About</li>
            <li className="hover:underline">Sign up</li>
          </ul>
        </div>
        <div className="w-[95%] mt-4 sm:mt-0 sm:order-2 lg:order-3 m-auto sm:w-[80%] lg:w-[40%] flex justify-around">
          <div className="bg-neutral-100 w-[70%] sm:w-fit flex items-center pe-4 sm:pe-7 rounded">
            <div>
              <input
                placeholder="Search...."
                className="bg-inherit w-full ps-3 py-1 sm:py-2 focus:outline-none border-0 "
                type="text"
              />
            </div>
            <div className="text-[25px]">
              <IoSearch />
            </div>
          </div>
          <div className="text-[28px] py-2">
            <FaRegHeart />
          </div>
          <div className="text-[35px] py-2">
            <MdOutlineShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
