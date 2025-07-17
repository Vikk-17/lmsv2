import React from 'react';
import { FaStar } from "react-icons/fa";


function Recommended() {
  return (
        <div className="bg-white rounded shadow-sm overflow-hidden">
            <div className="relative h-40">
                <img src="https://readdy.ai/api/search-image?query=Python%20programming%20course%20with%20code%20examples%20and%20data%20visualization%2C%20professional%20course%20thumbnail&width=300&height=160&seq=6&orientation=landscape" alt="Python Course" className="w-full h-full object-cover object-top"/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h6 className="text-white font-medium">Python for Data Science & Analytics</h6>
                </div>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">By David Thompson</p>
                <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-[var(--clr-primary-900)] ">4.8</span>
                    <div className="flex items-center ml-1">
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                    </div>
                    <span className="ml-1 text-xs text-gray-500">(9,824)</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">₹499</span>
                    <span className="text-sm text-gray-500 line-through">₹2,999</span>
                </div>
                <button className="mt-3 w-full border border-[var(--clr-accent-900)] text-[var(--clr-accent-900)] hover:bg-[var(--clr-accent-900)] hover:text-white font-medium py-2 px-4 rounded !rounded-button whitespace-nowrap">Add to Cart</button>
            </div>
        </div>
  )
}

export default Recommended