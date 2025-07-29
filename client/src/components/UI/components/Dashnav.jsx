import React from 'react'

function Dashnav() {
  return (
        <header class="bg-white border-b border-gray-200 sticky top-0 z-12">
                <div class="flex items-center justify-between px-6 py-3">
                    <div class="flex items-center space-x-4">
                        <button type="button" class="text-gray-500 hover:text-gray-700">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <i class="ri-menu-line"></i>
                            </div>
                        </button>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <div class="w-4 h-4 flex items-center justify-center text-gray-400">
                                    <i class="ri-search-line"></i>
                                </div>
                            </div>
                            <input type="text" class="bg-gray-50 border-none text-gray-900 text-sm rounded-lg block w-64 pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Search..."/>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <button type="button" class="relative p-1 text-gray-500 hover:text-gray-700 rounded-full">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <i class="ri-notification-3-line"></i>
                            </div>
                            <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <button type="button" class="relative p-1 text-gray-500 hover:text-gray-700 rounded-full">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <i class="ri-mail-line"></i>
                            </div>
                        </button>
                        <div class="border-l border-gray-200 h-6 mx-2"></div>
                        <div class="flex items-center">
                            <button type="button" class="flex items-center space-x-2">
                                <div class="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                                    <img src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20teacher%20with%20glasses%2C%20friendly%20smile%2C%20high%20quality%20professional%20photo%2C%20clean%20background&width=100&height=100&seq=1&orientation=squarish" alt="Profile" class="w-full h-full object-cover"/>
                                </div>
                                <span class="text-sm font-medium text-gray-700">David</span>
                                <div class="w-4 h-4 flex items-center justify-center text-gray-500">
                                    <i class="ri-arrow-down-s-line"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
        </header>
  )
}

export default Dashnav