import React from 'react';
import CartCourse from '../components/UI/components/CartCourse';
import SavedCouse from '../components/UI/components/SavedCouse';
import { FaArrowRightLong } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { CiLock } from "react-icons/ci";
import Recommended from '../components/UI/components/Recommended';


const ShoppingCart = () => {
  return (
     <main className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
                <div className="bg-white rounded shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">3 Courses in Cart</h2>
                    <CartCourse/>
                    <CartCourse/>
                    <CartCourse/>
                </div>
                
                <div className="bg-white rounded shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Saved for Later (2)</h2>        
                    <SavedCouse/>
                </div>
            </div>
            
            <div className="lg:w-1/3">
                <div className="bg-white rounded shadow-sm p-6 sticky top-24">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Total:</h2>
                    
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-gray-800">₹1,597</span>
                        <span className="text-sm text-gray-500 line-through">₹10,257</span>
                    </div>
                    
                    <div className="bg-green-50 text-green-700 px-3 py-2 rounded mb-6">
                        <span className="font-medium">84% off</span>
                    </div>
                    
                    <button className="w-full bg-[var(--clr-accent-900)] hover:bg-primary-dark text-white font-medium py-3 px-4 rounded !rounded-button flex items-center justify-center gap-2 mb-4 whitespace-nowrap">
                        Proceed to Checkout
                        <FaArrowRightLong/>
                    </button>
                    
                    <p className="text-xs text-gray-500 mb-6 text-center">You won't be charged yet</p>
                    
                    <div className="mb-6">
                        <div className="relative">
                            <input type="text" placeholder="Enter Coupon" className="w-full text-gray-500 py-2.5 px-4 border border-gray-300 rounded !rounded-button text-sm focus:outline-none focus:border-[var(--clr-accent-900)]"/>
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--clr-accent-900)] font-medium text-sm !rounded-button whitespace-nowrap">Apply Coupon</button>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Payment Options</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <RiVisaFill className='text-[var(--clr-accent-900)] text-3xl'/>
                            </div>
                            <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <RiMastercardFill className='text-[var(--clr-accent-900)] text-3xl'/>
                            </div>
                            <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <FaPaypal className='text-[var(--clr-accent-900)] text-3xl'/>
                            </div>
                            <div className="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <SiPhonepe className='text-[var(--clr-accent-900)] text-3xl'/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <CiLock className='mr-2'/>
                            <span>Secure Checkout</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">30-Day Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Recommended/>
                <Recommended/>
                <Recommended/>
                <Recommended/>
            </div>
        </div>
    </main>
  );
};

export default ShoppingCart;
