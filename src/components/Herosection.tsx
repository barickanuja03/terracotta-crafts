import React, { useRef } from "react";
import Slider from "react-slick";
function Herosection() {
    const img_arr= [
        {
          id: "1",
          image: "https://raw.githubusercontent.com/Rajesh6290/Terracotta/refs/heads/main/public/banner/b1.webp",
        },
        {
          id: "2",
          image: "https://raw.githubusercontent.com/Rajesh6290/Terracotta/refs/heads/main/public/banner/b11.webp",
        },
        {
          id: "3",
          image: "https://raw.githubusercontent.com/Rajesh6290/Terracotta/refs/heads/main/public/banner/b12.jpg",
        },
        {
          id: "4",
          image: "https://raw.githubusercontent.com/Rajesh6290/Terracotta/refs/heads/main/public/banner/b3.webp",
        },
      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };
  return (
    <>
     <section className=" w-full lg:h-[90vh] h-auto overflow-hidden relative">
      <div className="absolute w-full h-full flex items-center md:px-20 px-10  z-[1]">
        <div className="flex flex-col md:gap-7 gap-3">
          <p className="uppercase md:text-2xl lg:text-7xl text-lg font-bold text-white tracking-wide">
            Welcome to,
          </p>
          <p className="uppercase md:text-7xl text-lg font-bold text-white tracking-wide">
            Terracotta Craft
          </p>
          <p className="text-justify md:ext-base lg:text-xl text-xs  font-medium lg:w-[40%] w-full text-white tracking-wide">
            We are a leading manufacturer and exporter of clay and ceramic
            products based in Balasore, Odisha, India (756042). Our diverse
            range includes health-conscious clay cookware, crafted without any
            chemical additives. Experience the essence of purity and tradition
            in our meticulously crafted products.
          </p>
          <p className="bg-blue-800 w-40 cursor-pointer py-1 px-2  md:px-6 md:py-3 hover:bg-white hover:text-primary hover:text-black duration-300 animate-bounce text-center text-white font-medium bg-primary shadow-lg rounded-md">
            Explore Now
          </p>
        </div>
      </div>
          <div>
            <img
              src='https://raw.githubusercontent.com/Rajesh6290/Terracotta/refs/heads/main/public/banner/b11.webp'
              className="lg:h-[90vh] max-h-auto w-full object-fill "
              alt=""
            />
          </div>
    </section>
    </>
  )
}

export default Herosection
