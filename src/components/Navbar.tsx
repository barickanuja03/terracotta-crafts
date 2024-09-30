import React from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
function Navbar() {
  return (
    <>
    <div className="w-full sticky top-0 z-50 h-auto bg-orange-700 p-2">
      <div className="main-container">
        <div className='flex flex-row justify-around items-center'>
           <div>
            <img src="https://terracotta-seven.vercel.app/logo1.png" className='object-cover w-12 p-1'  />
           </div>
          <div>
           <ul className='text-white text-xl flex flex-row justify-center items-center gap-4'>
            <li>
               <Link href="/">
                   Home
               </Link>
            </li>
            <li>
               <Link href="/">
                   Products
               </Link>
            </li>
            <li>
                <Link href="/">
                   Testimonials
               </Link>
            </li>
            <li>
              <Link href="/">
                   Blogs
               </Link>
            </li>
            <li>
               <Link href="/">
                   About Us
               </Link>
            </li>
           </ul>
          </div>
          <div>
          <div>
            <ul className='flex flex-row justify-end items-center gap-5 text-xl'>
              <li className='bg-white text-black p-3 rounded-full'>
              <FaSearch />
              </li>
              <li className='bg-white text-black p-3 rounded-full'>
               <FaCartArrowDown />
              </li>
              <li className='bg-white text-black p-3 rounded-full'>
               <FaRegHeart />
              </li>
              <li className='bg-white text-black p-3 rounded-full'>
              <IoPersonRemove />
              </li>
              <li className='bg-blue-700 text-xl text-white px-4 py-1 rounded-xl'>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
