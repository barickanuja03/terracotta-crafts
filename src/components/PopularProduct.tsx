import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
function PopularProduct() {
  return (
    <>
      <div className="main-container">
       <div className="heading">
          Discover Our Most Popular <span className='text-black/45'>Products</span>
        </div>
     <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 h-auto'>
            <div className="bg-white shadow-md shadow-black border-gray-500 border-2">
                <div className=''>
                  <div className="mt-0 px-1">
                    25% off
                  </div>
                  <div className='object-cover flex w-full justify-center'>
                    <img src='/premiumproduct/p8.webp' className='w-32 aspect-square ' />
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>
                        Category
                        <h6>kitchen essentials</h6>
                    </div>
                    <div>
                        Instock
                    </div>
                  </div>
                  <div>
                    plates
                  </div>
                  <div>
                  <FaStarHalfAlt />
                  </div>
                  <div>
                  &#x20b9;499 <span className=''>&#x20b9;699</span>
                  </div>
                </div>
            </div>
        </div>
       </div> 
    </>
  )
}

export default PopularProduct
