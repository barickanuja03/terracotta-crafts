import React from 'react'
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
function Categories() {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className='main-container my-10'>
        <div>
            <div className="heading my-5">
              Browse Our Hottest <span className='text-black/45'>Categories</span>
            </div>
        </div>
        <div className="slider-container">
       <Slider {...settings}>
        <div className='flex justify-center items-center group relative mx-3 '>
          <div className=' aspect-squre p-5 -z-0'>
          <div>
              <img src="https://res.cloudinary.com/dxm4zavaw/image/upload/v1712664002/category/images%20%283%29.jpeg.jpg" alt="" className='w-[29rem] h-[10rem] object-fit px-11 py-5'/>
          </div>
          <div>
            <h3 className='text-center w-full py-3'>Home fragnance products</h3>
          </div>
         </div>
         <div className='absolute z-50 -bottom-24 group-hover:-bottom-5 duration-500 flex flex-row justify-center w-full'>
          <Link href="/" className='text-white  p-3 rounded-full bg-blue-600 max-w-min text-center'>
          <FaArrowRight/>
          </Link>
         </div>
        </div>



        <div className='flex justify-center items-center group relative mx-3'>
          <div className=' aspect-squre p-5 -z-0 '>
          <div>
              <img src="/premiumproduct/p1.webp" alt="img" className='object-fit px-11 py-5 w-[29rem] h-[10rem]'/>
          </div>
          <div>
            <h3 className='text-center w-full py-3'>Check</h3>
          </div>
         </div>
         <div className='absolute z-50 -bottom-24 group-hover:-bottom-5 duration-500 flex flex-row justify-center w-full'>
          <Link href="/" className='text-white  p-3 rounded-full bg-blue-600 max-w-min text-center'>
          <FaArrowRight/>
          </Link>
         </div>
        </div>
       


        <div className='flex justify-center items-center group relative mx-3'>
          <div className=' aspect-squre p-5 -z-0'>
          <div>
              <img src="/premiumproduct/p2.webp" alt="" className='object-fit px-11 py-5 w-[29rem] h-[10rem]'/>
          </div>
          <div>
            <h3 className='text-center w-full py-3'>Home fragnance products</h3>
          </div>
         </div>
         <div className='absolute z-50 -bottom-24 group-hover:-bottom-5 duration-500 flex flex-row justify-center w-full'>
          <Link href="/" className='text-white  p-3 rounded-full bg-blue-600 max-w-min text-center'>
          <FaArrowRight/>
          </Link>
         </div>
        </div>


        <div className='flex justify-center items-center group relative mx-3'>
          <div className=' aspect-squre p-5 -z-0'>
          <div>
              <img src="/premiumproduct/p3.webp" alt="" className='object-fit px-11 py-5 w-[29rem] h-[10rem]'/>
          </div>
          <div>
            <h3 className='text-center w-full py-3'>Home fragnance products</h3>
          </div>
         </div>
         <div className='absolute z-50 -bottom-24 group-hover:-bottom-5 duration-500 flex flex-row justify-center w-full'>
          <Link href="/" className='text-white  p-3 rounded-full bg-blue-600 max-w-min text-center'>
          <FaArrowRight/>
          </Link>
         </div>
        </div>

        <div className='flex justify-center items-center group relative mx-3'>
          <div className=' aspect-squre p-5 -z-0'>
          <div>
              <img src="/premiumproduct/p4.webp" alt="" className='object-fit px-11 py-5 w-[29rem] h-[10rem]'/>
          </div>
          <div>
            <h3 className='text-center w-full py-3'>Home fragnance products</h3>
          </div>
         </div>
         <div className='absolute z-50 -bottom-24 group-hover:-bottom-5 duration-500 flex flex-row justify-center w-full'>
          <Link href="/" className='text-white  p-3 rounded-full bg-blue-600 max-w-min text-center'>
          <FaArrowRight/>
          </Link>
         </div>
        </div>


        <div className='flex justify-center items-center group relative mx-3'>
          <div className=' aspect-squre p-5 -z-0'>
          <div>
              <img src="/premiumproduct/p5.webp" alt="" className='object-fit px-11 py-5 w-[29rem] h-[10rem]'/>
          </div>
          <div>
            <h3 className='text-center w-full py-3'>Home fragnance products</h3>
          </div>
         </div>
         <div className='absolute group-hover:z-50 -bottom-24 group-hover:-bottom-5 duration-500 flex flex-row justify-center w-full'>
          <Link href="/" className='text-white  p-3 rounded-full bg-blue-600 max-w-min text-center'>
          <FaArrowRight/>
          </Link>
         </div>
        </div>
      </Slider>
    </div>
     </div> 
    </>
  )
}

export default Categories
