import React from 'react'

function InstructorDash() {
  return (
    <div class="mx-4 my-6">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl">Dashboard</h1>
            <button class="bg-[var(--clr-accent-900)]  text-white px-4 py-2 rounded-lg flex items-center whitespace-nowrap">
                <div class="w-5 h-5 flex items-center justify-center mr-2">
                    <i class="ri-add-line"></i>
                </div>
                <span>Create New Course</span>
            </button>
        </div>
    
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Total Courses</h3>
                    <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <i class="ri-book-open-line"></i>
                        </div>
                    </div>
                </div>
                <div class="flex items-end">
                    <span class="text-3xl font-bold text-gray-900">12</span>
                    <span class="ml-2 text-sm text-green-500 flex items-center">
                        <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-arrow-up-line"></i>
                        </div>
                        <span>8.2%</span>
                    </span>
                </div>
                <p class="text-xs text-gray-500 mt-1">From last month</p>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Total Students</h3>
                    <div class="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <i class="ri-user-line"></i>
                        </div>
                    </div>
                </div>
                <div class="flex items-end">
                    <span class="text-3xl font-bold text-gray-900">1,284</span>
                    <span class="ml-2 text-sm text-green-500 flex items-center">
                        <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-arrow-up-line"></i>
                        </div>
                        <span>12.5%</span>
                    </span>
                </div>
                <p class="text-xs text-gray-500 mt-1">From last month</p>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Average Rating</h3>
                    <div class="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <i class="ri-star-line"></i>
                        </div>
                    </div>
                </div>
                <div class="flex items-end">
                    <span class="text-3xl font-bold text-gray-900">4.8</span>
                    <span class="ml-2 text-sm text-green-500 flex items-center">
                        <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-arrow-up-line"></i>
                        </div>
                        <span>0.3</span>
                    </span>
                </div>
                <p class="text-xs text-gray-500 mt-1">From last month</p>
            </div>
    
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-gray-500">Revenue</h3>
                    <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <i class="ri-money-dollar-circle-line"></i>
                        </div>
                    </div>
                </div>
                <div class="flex items-end">
                    <span class="text-3xl font-bold text-gray-900">$8,492</span>
                    <span class="ml-2 text-sm text-green-500 flex items-center">
                        <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-arrow-up-line"></i>
                        </div>
                        <span>18.2%</span>
                    </span>
                </div>
                <p class="text-xs text-gray-500 mt-1">From last month</p>
            </div>
        </div>
    
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <div class="p-6 border-b border-gray-100">
                    <h2 class="text-lg font-semibold text-gray-900">Recent Activity</h2>
                </div>
                <div class="p-6">
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-user-add-line"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-900">
                                    <span class="font-medium">15 new students</span> enrolled in <span class="font-medium">Advanced JavaScript Techniques</span>
                                </p>
                                <p class="text-xs text-gray-500 mt-1">2 hours ago</p>
                            </div>
                        </div>
    
                        <div class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 flex-shrink-0">
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-message-3-line"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-900">
                                    <span class="font-medium">Jennifer Wilson</span> left a review on <span class="font-medium">React for Beginners</span>
                                </p>
                                <div class="flex items-center mt-1">
                                    <div class="flex">
                                        <div class="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i class="ri-star-fill"></i>
                                        </div>
                                        <div class="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i class="ri-star-fill"></i>
                                        </div>
                                        <div class="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i class="ri-star-fill"></i>
                                        </div>
                                        <div class="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i class="ri-star-fill"></i>
                                        </div>
                                        <div class="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i class="ri-star-fill"></i>
                                        </div>
                                    </div>
                                    <p class="text-xs text-gray-500 ml-2">5 hours ago</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 flex-shrink-0">
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-video-upload-line"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-900">
                                    <span class="font-medium">CSS Grid Masterclass</span> video upload completed
                                </p>
                                <p class="text-xs text-gray-500 mt-1">Yesterday at 11:42 PM</p>
                            </div>
                        </div>
    
                        <div class="flex items-start">
                            <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <i class="ri-money-dollar-circle-line"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <p class="text-sm text-gray-900">
                                    <span class="font-medium">$420.80</span> payout processed for <span class="font-medium">June 2025</span>
                                </p>
                                <p class="text-xs text-gray-500 mt-1">Yesterday at 5:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="bg-white rounded-lg shadow-sm border border-gray-100">
                <div class="p-6 border-b border-gray-100">
                    <h2 class="text-lg font-semibold text-gray-900">Draft Courses</h2>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div class="p-4 border border-gray-200 rounded-lg hover:border-[var(--clr-accent-900)] transition-colors">
                            <h6 class=" text-gray-900">Vue.js for React Developers</h6>
                            <div class="flex items-center mt-2 text-xs text-gray-500">
                                <div class="w-4 h-4 flex items-center justify-center mr-1">
                                    <i class="ri-time-line"></i>
                                </div>
                                <span>Last edited: July 2, 2025</span>
                            </div>
                            <div class="mt-3 flex items-center justify-between">
                                <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">70% complete</span>
                                <button class="text-primary text-sm hover:text-primary-dark">Continue</button>
                            </div>
                        </div>
    
                        <div class="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <h6 class=" text-gray-900">TypeScript Fundamentals</h6>
                            <div class="flex items-center mt-2 text-xs text-gray-500">
                                <div class="w-4 h-4 flex items-center justify-center mr-1">
                                    <i class="ri-time-line"></i>
                                </div>
                                <span>Last edited: June 28, 2025</span>
                            </div>
                            <div class="mt-3 flex items-center justify-between">
                                <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">40% complete</span>
                                <button class="text-primary text-sm hover:text-primary-dark">Continue</button>
                            </div>
                        </div>
    
                        <div class="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <h6 class=" text-gray-900">Responsive Web Design Masterclass</h6>
                            <div class="flex items-center mt-2 text-xs text-gray-500">
                                <div class="w-4 h-4 flex items-center justify-center mr-1">
                                    <i class="ri-time-line"></i>
                                </div>
                                <span>Last edited: June 15, 2025</span>
                            </div>
                            <div class="mt-3 flex items-center justify-between">
                                <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">85% complete</span>
                                <button class="text-primary text-sm hover:text-primary-dark">Continue</button>
                            </div>
                        </div>
                    </div>
    
                    <button class="w-full mt-4 text-center text-sm text-primary hover:text-primary-dark">
                        View all drafts
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstructorDash