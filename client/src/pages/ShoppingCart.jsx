import React from 'react'

const ShoppingCart = () => {
  return (
     <main class="container mx-auto px-4 py-8 max-w-6xl">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="lg:w-2/3">
                <div class="bg-white rounded shadow-sm p-6 mb-6">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4">3 Courses in Cart</h2>
                    
                    <div class="border-b border-gray-200 pb-6 mb-6">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="sm:w-40 h-24 rounded overflow-hidden flex-shrink-0">
                                <img src="https://readdy.ai/api/search-image?query=Data%20science%20and%20machine%20learning%20visualization%20with%20blue%20digital%20abstract%20background%2C%20professional%20course%20thumbnail&width=160&height=90&seq=1&orientation=landscape" alt="Data Science Course" class="w-full h-full object-cover object-top"/>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Complete Data Science, Machine Learning, DL, NLP Bootcamp</h3>
                                <p class="text-sm text-gray-600 mb-2">By Michael Chen and 1 other</p>
                                <div class="flex items-center mb-2">
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">Bestseller</span>
                                    <span class="ml-2 text-sm font-medium">4.6</span>
                                    <div class="flex items-center ml-1">
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-half-fill text-yellow-400"></i>
                                    </div>
                                    <span class="ml-1 text-xs text-gray-500">(14,826 ratings)</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-500 mb-3">
                                    <span>99 total hours</span>
                                    <span class="mx-2">•</span>
                                    <span>429 lectures</span>
                                    <span class="mx-2">•</span>
                                    <span>All Levels</span>
                                </div>
                                <div class="flex items-center">
                                    <span class="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">Premium</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end justify-between">
                                <div class="flex items-center">
                                    <span class="text-lg font-bold text-gray-800">₹599</span>
                                    <span class="ml-1 text-primary">
                                        <i class="ri-coupon-line"></i>
                                    </span>
                                </div>
                                <span class="text-sm text-gray-500 line-through">₹3,839</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4 justify-end">
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Remove</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Save for Later</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Move to Wishlist</button>
                        </div>
                    </div>
                    
                    <div class="border-b border-gray-200 pb-6 mb-6">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="sm:w-40 h-24 rounded overflow-hidden flex-shrink-0">
                                <img src="https://readdy.ai/api/search-image?query=Web%20development%20coding%20HTML%20CSS%20JavaScript%20interface%20with%20clean%20modern%20design%2C%20professional%20course%20thumbnail&width=160&height=90&seq=2&orientation=landscape" alt="Web Development Course" class="w-full h-full object-cover object-top"/>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Complete Web Development Course</h3>
                                <p class="text-sm text-gray-600 mb-2">By Sarah Johnson</p>
                                <div class="flex items-center mb-2">
                                    <span class="text-sm font-medium">4.6</span>
                                    <div class="flex items-center ml-1">
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-half-fill text-yellow-400"></i>
                                    </div>
                                    <span class="ml-1 text-xs text-gray-500">(12,547 ratings)</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-500 mb-3">
                                    <span>79.5 total hours</span>
                                    <span class="mx-2">•</span>
                                    <span>231 lectures</span>
                                    <span class="mx-2">•</span>
                                    <span>All Levels</span>
                                </div>
                                <div class="flex items-center">
                                    <span class="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">Premium</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end justify-between">
                                <div class="flex items-center">
                                    <span class="text-lg font-bold text-gray-800">₹499</span>
                                    <span class="ml-1 text-primary">
                                        <i class="ri-coupon-line"></i>
                                    </span>
                                </div>
                                <span class="text-sm text-gray-500 line-through">₹3,199</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4 justify-end">
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Remove</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Save for Later</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Move to Wishlist</button>
                        </div>
                    </div>
                    
                    <div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="sm:w-40 h-24 rounded overflow-hidden flex-shrink-0">
                                <img src="https://readdy.ai/api/search-image?query=Full%20stack%20web%20development%20with%20JavaScript%20React%20Node.js%2C%20professional%20course%20thumbnail&width=160&height=90&seq=3&orientation=landscape" alt="Full-Stack Development Course" class="w-full h-full object-cover object-top"/>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">The Complete Full-Stack Web Development Bootcamp</h3>
                                <p class="text-sm text-gray-600 mb-2">By Dr. Emily Taylor, Developer and Lead Instructor</p>
                                <div class="flex items-center mb-2">
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">Bestseller</span>
                                    <span class="ml-2 text-sm font-medium">4.7</span>
                                    <div class="flex items-center ml-1">
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-half-fill text-yellow-400"></i>
                                    </div>
                                    <span class="ml-1 text-xs text-gray-500">(443,267 ratings)</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-500 mb-3">
                                    <span>61.5 total hours</span>
                                    <span class="mx-2">•</span>
                                    <span>374 lectures</span>
                                    <span class="mx-2">•</span>
                                    <span>All Levels</span>
                                </div>
                                <div class="flex items-center">
                                    <span class="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">Premium</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end justify-between">
                                <div class="flex items-center">
                                    <span class="text-lg font-bold text-gray-800">₹499</span>
                                    <span class="ml-1 text-primary">
                                        <i class="ri-coupon-line"></i>
                                    </span>
                                </div>
                                <span class="text-sm text-gray-500 line-through">₹3,219</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4 justify-end">
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Remove</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Save for Later</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded shadow-sm p-6">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4">Saved for Later (2)</h2>
                    
                    <div class="border-b border-gray-200 pb-6 mb-6">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="sm:w-40 h-24 rounded overflow-hidden flex-shrink-0">
                                <img src="https://readdy.ai/api/search-image?query=UX%20UI%20design%20course%20with%20wireframes%20and%20prototypes%2C%20professional%20course%20thumbnail&width=160&height=90&seq=4&orientation=landscape" alt="UX Design Course" class="w-full h-full object-cover object-top"/>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Complete UX/UI Design Masterclass</h3>
                                <p class="text-sm text-gray-600 mb-2">By Alexandra Martinez</p>
                                <div class="flex items-center mb-2">
                                    <span class="text-sm font-medium">4.8</span>
                                    <div class="flex items-center ml-1">
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-half-fill text-yellow-400"></i>
                                    </div>
                                    <span class="ml-1 text-xs text-gray-500">(8,452 ratings)</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-500 mb-3">
                                    <span>42 total hours</span>
                                    <span class="mx-2">•</span>
                                    <span>186 lectures</span>
                                    <span class="mx-2">•</span>
                                    <span>All Levels</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end justify-between">
                                <div class="flex items-center">
                                    <span class="text-lg font-bold text-gray-800">₹449</span>
                                </div>
                                <span class="text-sm text-gray-500 line-through">₹2,999</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4 justify-end">
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Move to Cart</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Remove</button>
                        </div>
                    </div>
                    
                    <div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="sm:w-40 h-24 rounded overflow-hidden flex-shrink-0">
                                <img src="https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20professional%20course%20thumbnail&width=160&height=90&seq=5&orientation=landscape" alt="Digital Marketing Course" class="w-full h-full object-cover object-top"/>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Digital Marketing Strategy & Analytics</h3>
                                <p class="text-sm text-gray-600 mb-2">By Robert Williams, Marketing Expert</p>
                                <div class="flex items-center mb-2">
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">Bestseller</span>
                                    <span class="ml-2 text-sm font-medium">4.7</span>
                                    <div class="flex items-center ml-1">
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-fill text-yellow-400"></i>
                                        <i class="ri-star-half-fill text-yellow-400"></i>
                                    </div>
                                    <span class="ml-1 text-xs text-gray-500">(21,389 ratings)</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-500 mb-3">
                                    <span>38.5 total hours</span>
                                    <span class="mx-2">•</span>
                                    <span>215 lectures</span>
                                    <span class="mx-2">•</span>
                                    <span>Intermediate</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end justify-between">
                                <div class="flex items-center">
                                    <span class="text-lg font-bold text-gray-800">₹549</span>
                                </div>
                                <span class="text-sm text-gray-500 line-through">₹3,499</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4 justify-end">
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Move to Cart</button>
                            <button class="text-primary hover:text-primary-dark text-sm font-medium !rounded-button">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="lg:w-1/3">
                <div class="bg-white rounded shadow-sm p-6 sticky top-24">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4">Total:</h2>
                    
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-2xl font-bold text-gray-800">₹1,597</span>
                        <span class="text-sm text-gray-500 line-through">₹10,257</span>
                    </div>
                    
                    <div class="bg-green-50 text-green-700 px-3 py-2 rounded mb-6">
                        <span class="font-medium">84% off</span>
                    </div>
                    
                    <button class="w-full bg-[var(--clr-accent-900)] hover:bg-primary-dark text-white font-medium py-3 px-4 rounded !rounded-button flex items-center justify-center gap-2 mb-4 whitespace-nowrap">
                        Proceed to Checkout
                        <i class="ri-arrow-right-line"></i>
                    </button>
                    
                    <p class="text-xs text-gray-500 mb-6 text-center">You won't be charged yet</p>
                    
                    <div class="mb-6">
                        <div class="relative">
                            <input type="text" placeholder="Enter Coupon" class="w-full py-2.5 px-4 border border-gray-300 rounded !rounded-button text-sm focus:outline-none focus:border-primary"/>
                            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary font-medium text-sm !rounded-button whitespace-nowrap">Apply Coupon</button>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-sm font-semibold text-gray-700 mb-3">Payment Options</h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <div class="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <i class="ri-visa-fill text-blue-700 text-xl"></i>
                            </div>
                            <div class="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <i class="ri-mastercard-fill text-orange-600 text-xl"></i>
                            </div>
                            <div class="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <i class="ri-paypal-fill text-blue-600 text-xl"></i>
                            </div>
                            <div class="border border-gray-200 rounded p-2 w-16 h-10 flex items-center justify-center">
                                <i class="ri-apple-fill text-gray-800 text-xl"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-200 pt-4">
                        <div class="flex items-center text-sm text-gray-600">
                            <i class="ri-lock-line mr-2"></i>
                            <span>Secure Checkout</span>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">30-Day Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">You might also like</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded shadow-sm overflow-hidden">
                    <div class="relative h-40">
                        <img src="https://readdy.ai/api/search-image?query=Python%20programming%20course%20with%20code%20examples%20and%20data%20visualization%2C%20professional%20course%20thumbnail&width=300&height=160&seq=6&orientation=landscape" alt="Python Course" class="w-full h-full object-cover object-top"/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <h3 class="text-white font-medium">Python for Data Science & Analytics</h3>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="text-sm text-gray-600 mb-2">By David Thompson</p>
                        <div class="flex items-center mb-2">
                            <span class="text-sm font-medium">4.8</span>
                            <div class="flex items-center ml-1">
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-half-fill text-yellow-400"></i>
                            </div>
                            <span class="ml-1 text-xs text-gray-500">(9,824)</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹499</span>
                            <span class="text-sm text-gray-500 line-through">₹2,999</span>
                        </div>
                        <button class="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded !rounded-button whitespace-nowrap">Add to Cart</button>
                    </div>
                </div>
                
                <div class="bg-white rounded shadow-sm overflow-hidden">
                    <div class="relative h-40">
                        <img src="https://readdy.ai/api/search-image?query=Mobile%20app%20development%20with%20React%20Native%20on%20multiple%20devices%2C%20professional%20course%20thumbnail&width=300&height=160&seq=7&orientation=landscape" alt="Mobile App Development Course" class="w-full h-full object-cover object-top"/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <h3 class="text-white font-medium">Mobile App Development with React Native</h3>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="text-sm text-gray-600 mb-2">By Jennifer Lee</p>
                        <div class="flex items-center mb-2">
                            <span class="text-sm font-medium">4.7</span>
                            <div class="flex items-center ml-1">
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-half-fill text-yellow-400"></i>
                            </div>
                            <span class="ml-1 text-xs text-gray-500">(7,612)</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹549</span>
                            <span class="text-sm text-gray-500 line-through">₹3,299</span>
                        </div>
                        <button class="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded !rounded-button whitespace-nowrap">Add to Cart</button>
                    </div>
                </div>
                
                <div class="bg-white rounded shadow-sm overflow-hidden">
                    <div class="relative h-40">
                        <img src="https://readdy.ai/api/search-image?query=AWS%20cloud%20computing%20architecture%20diagram%20with%20services%2C%20professional%20course%20thumbnail&width=300&height=160&seq=8&orientation=landscape" alt="AWS Course" class="w-full h-full object-cover object-top"/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <h3 class="text-white font-medium">AWS Certified Solutions Architect</h3>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="text-sm text-gray-600 mb-2">By Richard Brown</p>
                        <div class="flex items-center mb-2">
                            <span class="text-sm font-medium">4.9</span>
                            <div class="flex items-center ml-1">
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                            </div>
                            <span class="ml-1 text-xs text-gray-500">(12,458)</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹649</span>
                            <span class="text-sm text-gray-500 line-through">₹3,899</span>
                        </div>
                        <button class="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded !rounded-button whitespace-nowrap">Add to Cart</button>
                    </div>
                </div>
                
                <div class="bg-white rounded shadow-sm overflow-hidden">
                    <div class="relative h-40">
                        <img src="https://readdy.ai/api/search-image?query=Cybersecurity%20digital%20lock%20and%20protection%20shield%20concept%2C%20professional%20course%20thumbnail&width=300&height=160&seq=9&orientation=landscape" alt="Cybersecurity Course" class="w-full h-full object-cover object-top"/>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <h3 class="text-white font-medium">Complete Cybersecurity Bootcamp</h3>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="text-sm text-gray-600 mb-2">By Thomas Wilson</p>
                        <div class="flex items-center mb-2">
                            <span class="text-sm font-medium">4.8</span>
                            <div class="flex items-center ml-1">
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-fill text-yellow-400"></i>
                                <i class="ri-star-half-fill text-yellow-400"></i>
                            </div>
                            <span class="ml-1 text-xs text-gray-500">(8,921)</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹599</span>
                            <span class="text-sm text-gray-500 line-through">₹3,599</span>
                        </div>
                        <button class="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded !rounded-button whitespace-nowrap">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default ShoppingCart;
