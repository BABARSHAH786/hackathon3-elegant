// import Image from "next/image"
// import Link from "next/link"
// export default function Navbar(){
//     return(
//       <div>
//         <div>
          
//       {/* white work */}
//       <div className=" bg-[rgb(254,252,245)]
// w-[1170px] h-[38px] mt-10 relative left-[135px] flex">
//         <div className="w-[674px] h-[24px] gap-[190px] flex ">
//           {/* <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex"> */}
            
//           {/* </p> */}
//           <div className="w-[367px] h-[24px] flex gap-[48px] justify-between ">
//           <Link className="relative left-[45px]  "  href="/">Home</Link>
//             <Link className="relative left-[45px]  " href="/contact">shop</Link>
//             <Link className="relative left-[45px]  " href="/about">About</Link>
//             <Link className="relative left-[45px]  " href="/signup">contact</Link>
//             <Link className="relative left-[45px]  " href="/check">check</Link>

//           </div>
//         </div>
//       </div>


//  <div className="w-[1440px] h-[900px] mt-[100px] flex bg-[#FBEBB5]">

//   <div className="w-[440px] h-[276px]  ml-[202px]">

//     <p className="w-[440px] h-[192px] mt-[428px]  ml-[202px] font-medium leading-[96px]
//      text-[64px]"
//     >Rocket single seater </p>
  
//   <div className="w-[440px] h-[276px]  ml-[202px] border-black" >
// <p className="w-[121px] h-[36px]  text-black ml-[206px]
//  font-medium leading-[36px]
//      text-[24px]">Shop Now</p>
//        </div>

//      </div>
//      <div className="w-[853px] ml-10">
//      <Image className="pt-[14px] pr-[190px]  " src={"/image 1.png"} alt="" width={853} height={1000} />
//   </div>
//   </div>    
//   {/* 2 page */}
//    <div className="w-[1440px] h-[672px] mt-[996px] bg-white"  > 
// <div className="w-[605px] h-[552px] mt-[1047px] flex  ml-[100px]"> 
//   <div  className="w-[1092px] h-[1641px] mt-[122px]  ml-[-54px]"> 
    
//   <Image className="pt-[14px] pr-[190px]  " src={"/image 2.png"}
//    alt="" width={853} height={1000} />
//   </div>
//   </div>
//   <p className="w-[182px] h-[54px] mt-[px]  ml-[205px] font-medium leading-[36px]
//      text-[24px] ">
//   Side table </p>
//   <p className="w-[182px] h-[54px] mt-[px]  ml-[205px] font-medium leading-[36px]
//      text-[24px] ">View More</p>

// <div className="w-[605px] flex h-[562px] mt-[px]  ml-[735px]" > 
//   <div>
//   <Image className="pt-[14px] pr-[190px] mt-[-440px] " src={"/image 3.png"}
//    alt="" width={853} height={1000} />
//   </div>
// </div>
// <p className="w-[182px] flex h-[54px] mt-[-440px]  ml-[205px] font-medium leading-[36px]
//      text-[24px] ">
//   Side table </p>
//   <p className="w-[182px] flex h-[54px] mt-[-540px]  ml-[505px] font-medium leading-[36px]
//      text-[24px] ">View More</p>
 
//   </div> 
//   </div>

//         </div>

         
//     )
// }

// change navbar
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiShoppingCart, CiSearch, CiHeart, CiUser } from 'react-icons/ci';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-poppins text-black relative">
      {/* Header Container */}
      <div className="bg-white w-full max-w-[1440px] mx-auto py-6 px-4 sm:px-8 flex justify-between items-center">
        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Menu (Desktop Version) */}
        <div className="hidden sm:flex gap-12">
          <ul className="flex flex-row items-center text-base font-medium text-center gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
           <li >
              <Link href="/shop">Shop</Link>
           </li>
            
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6 sm:gap-8 text-[24px] sm:text-[28px]">
          <Link href="/Pages/myAccount">
            <CiUser />
          </Link>
          <Link href="#">
            <CiSearch />
          </Link>
          <Link href="#">
            <CiHeart />
          </Link>
          
            <CiShoppingCart />
          
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] ${
          isMenuOpen ? 'bg-white' : 'bg-[#FBEBB5]'
        } z-50 shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-4 text-black text-2xl"
        >
          <FiX />
        </button>
        <ul className="flex flex-col items-center gap-6 mt-16 text-lg font-medium">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/Pages/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when Menu is Open */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </div>
  );
}
