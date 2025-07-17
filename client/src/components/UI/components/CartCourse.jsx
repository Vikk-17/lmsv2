import React from 'react';
import { FaStar } from "react-icons/fa";


function CartCourse() {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-40 h-24 rounded overflow-hidden flex-shrink-0">
                <img src="https://readdy.ai/api/search-image?query=Data%20science%20and%20machine%20learning%20visualization%20with%20blue%20digital%20abstract%20background%2C%20professional%20course%20thumbnail&width=160&height=90&seq=1&orientation=landscape" alt="Data Science Course" className="w-full h-full object-cover object-top"/>
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-1">Complete Data Science, Machine Learning, DL, NLP Bootcamp</h3>
                <p className="text-sm text-[var(--clr-primary-400)] mb-2">By Michael Chen and 1 other</p>
                <div className="flex items-center mb-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">Bestseller</span>
                    <span className="ml-2 text-sm font-medium">4.6</span>
                    <div className="flex items-center ml-1">
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                    </div>
                    <span className="ml-1 text-xs text-[var(--clr-primary-400)]">(14,826 ratings)</span>
                </div>
                <div className="flex items-center text-xs text-[var(--clr-primary-400)] mb-3">
                    <span>99 total hours</span>
                    <span className="mx-2">•</span>
                    <span>429 lectures</span>
                    <span className="mx-2">•</span>
                    <span>All Levels</span>
                </div>
                <div className="flex items-center">
                    <span className="bg-[var(--clr-accent-200)] bg-opacity-10 text-[var(--clr-accent-900)] text-xs font-medium px-2 py-0.5 rounded-full">Premium</span>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between">
                <div className="flex items-center">
                    <span className="text-lg font-bold text-[var(--clr-primary-900)] ">₹599</span>
                </div>
                <span className="text-sm line-through text-[var(--clr-primary-400)]">₹3,839</span>
            </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 justify-end">
            <button className="text-[var(--clr-accent-900)] hover:text-[var(--clr-accent-1000)] text-sm font-medium ">Remove</button>
            <button className="text-[var(--clr-accent-900)] hover:text-[var(--clr-accent-1000)] text-sm font-medium ">Save for Later</button>
            <button className="text-[var(--clr-accent-900)] hover:text-[var(--clr-accent-1000)] text-sm font-medium ">Move to Wishlist</button>
        </div>
    </div>
  )
}

export default CartCourse