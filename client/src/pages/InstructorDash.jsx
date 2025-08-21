import React from 'react'

function InstructorDash() {
  return (
    <div className="mx-4 my-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl">Dashboard</h1>
            <button className="bg-[var(--clr-accent-900)]  text-white px-4 py-2 rounded-lg flex items-center whitespace-nowrap">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-add-line"></i>
                </div>
                <span>Create New Course</span>
            </button>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500">Total Courses</h3>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-book-open-line"></i>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <span className="text-3xl font-bold text-gray-900">12</span>
                    <span className="ml-2 text-sm text-green-500 flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-arrow-up-line"></i>
                        </div>
                        <span>8.2%</span>
                    </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">From last month</p>
            </div>
    
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-user-line"></i>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <span className="text-3xl font-bold text-gray-900">1,284</span>
                    <span className="ml-2 text-sm text-green-500 flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-arrow-up-line"></i>
                        </div>
                        <span>12.5%</span>
                    </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">From last month</p>
            </div>
    
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-star-line"></i>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <span className="text-3xl font-bold text-gray-900">4.8</span>
                    <span className="ml-2 text-sm text-green-500 flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-arrow-up-line"></i>
                        </div>
                        <span>0.3</span>
                    </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">From last month</p>
            </div>
    
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-money-dollar-circle-line"></i>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <span className="text-3xl font-bold text-gray-900">$8,492</span>
                    <span className="ml-2 text-sm text-green-500 flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-arrow-up-line"></i>
                        </div>
                        <span>18.2%</span>
                    </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">From last month</p>
            </div>
        </div>
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                </div>
                <div className="p-6">
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <i className="ri-user-add-line"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-900">
                                    <span className="font-medium">15 new students</span> enrolled in <span className="font-medium">Advanced JavaScript Techniques</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                            </div>
                        </div>
    
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 flex-shrink-0">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <i className="ri-message-3-line"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-900">
                                    <span className="font-medium">Jennifer Wilson</span> left a review on <span className="font-medium">React for Beginners</span>
                                </p>
                                <div className="flex items-center mt-1">
                                    <div className="flex">
                                        <div className="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <div className="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <div className="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <div className="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <div className="w-4 h-4 flex items-center justify-center text-yellow-400">
                                            <i className="ri-star-fill"></i>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 ml-2">5 hours ago</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 flex-shrink-0">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <i className="ri-video-upload-line"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-900">
                                    <span className="font-medium">CSS Grid Masterclass</span> video upload completed
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Yesterday at 11:42 PM</p>
                            </div>
                        </div>
    
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <i className="ri-money-dollar-circle-line"></i>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-900">
                                    <span className="font-medium">$420.80</span> payout processed for <span className="font-medium">June 2025</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Yesterday at 5:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Draft Courses</h2>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-[var(--clr-accent-900)] transition-colors">
                            <h6 className=" text-gray-900">Vue.js for React Developers</h6>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <div className="w-4 h-4 flex items-center justify-center mr-1">
                                    <i className="ri-time-line"></i>
                                </div>
                                <span>Last edited: July 2, 2025</span>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">70% complete</span>
                                <button className="text-primary text-sm hover:text-primary-dark">Continue</button>
                            </div>
                        </div>
    
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <h6 className=" text-gray-900">TypeScript Fundamentals</h6>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <div className="w-4 h-4 flex items-center justify-center mr-1">
                                    <i className="ri-time-line"></i>
                                </div>
                                <span>Last edited: June 28, 2025</span>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">40% complete</span>
                                <button className="text-primary text-sm hover:text-primary-dark">Continue</button>
                            </div>
                        </div>
    
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                            <h6 className=" text-gray-900">Responsive Web Design Masterclass</h6>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <div className="w-4 h-4 flex items-center justify-center mr-1">
                                    <i className="ri-time-line"></i>
                                </div>
                                <span>Last edited: June 15, 2025</span>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">85% complete</span>
                                <button className="text-primary text-sm hover:text-primary-dark">Continue</button>
                            </div>
                        </div>
                    </div>
    
                    <button className="w-full mt-4 text-center text-sm text-primary hover:text-primary-dark">
                        View all drafts
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstructorDash