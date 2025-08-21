import React from 'react'

function InstructorMyCourses() {
  return (
    <div className='px-4 py-6'>
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl">My Courses</h1>
            <button className="bg-[var(--clr-accent-900)]  text-white px-4 py-2 rounded-lg flex items-center whitespace-nowrap">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-add-line"></i>
                </div>
                <span>Create New Course</span>
            </button>
        </div>
        <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">All Courses</h2>
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <div className="w-4 h-4 flex items-center justify-center text-gray-400">
                                <i className="ri-search-line"></i>
                            </div>
                        </div>
                        <input type="text" className="bg-gray-50 border-none text-gray-900 text-sm rounded-lg block w-64 pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Search courses..."/>
                    </div>
                    <div className="relative">
                        <button id="filter-button" className="flex items-center space-x-2  px-3 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm !rounded-button whitespace-nowrap">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-filter-3-line"></i>
                            </div>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>
            </div>
        
            <div className="p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Course</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Students</th>
                                <th scope="col" className="px-6 py-3">Rating</th>
                                <th scope="col" className="px-6 py-3">Last Updated</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden mr-3">
                                            <img src="https://readdy.ai/api/search-image?query=javascript%20code%20on%20computer%20screen%2C%20modern%20programming%20concept%2C%20clean%20professional%20image&width=100&height=100&seq=2&orientation=squarish" alt="Course" className="w-full h-full object-cover"/>
                                        </div>
                                        <div>
                                            <h6 className="font-medium text-gray-900">Advanced JavaScript Techniques</h6>
                                            <p className="text-xs text-gray-500">Web Development</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Published</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <span className="font-medium">428</span>
                                        <span className="ml-2 text-xs text-green-500 flex items-center">
                                            <div className="w-3 h-3 flex items-center justify-center">
                                                <i className="ri-arrow-up-line"></i>
                                            </div>
                                            <span>12%</span>
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
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
                                                <i className="ri-star-half-fill"></i>
                                            </div>
                                        </div>
                                        <span className="ml-1 text-sm text-gray-500">4.5</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    July 1, 2025
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-eye-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-more-2-fill"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
        
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden mr-3">
                                            <img src="https://readdy.ai/api/search-image?query=react%20javascript%20framework%20logo%2C%20modern%20web%20development%2C%20professional%20clean%20image&width=100&height=100&seq=3&orientation=squarish" alt="Course" className="w-full h-full object-cover"/>
                                        </div>
                                        <div>
                                            <h6 className="font-medium text-gray-900">React for Beginners</h6>
                                            <p className="text-xs text-gray-500">Frontend Development</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Published</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <span className="font-medium">356</span>
                                        <span className="ml-2 text-xs text-green-500 flex items-center">
                                            <div className="w-3 h-3 flex items-center justify-center">
                                                <i className="ri-arrow-up-line"></i>
                                            </div>
                                            <span>8%</span>
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
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
                                        <span className="ml-1 text-sm text-gray-500">5.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    June 25, 2025
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-eye-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-more-2-fill"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
        
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden mr-3">
                                            <img src="https://readdy.ai/api/search-image?query=css%20grid%20layout%2C%20web%20design%20concept%2C%20modern%20clean%20professional%20image&width=100&height=100&seq=4&orientation=squarish" alt="Course" className="w-full h-full object-cover"/>
                                        </div>
                                        <div>
                                            <h6 className="font-medium text-gray-900">CSS Grid Masterclass</h6>
                                            <p className="text-xs text-gray-500">Web Design</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Draft</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium">-</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">-</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    July 3, 2025
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-eye-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-more-2-fill"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
        
                            <tr className="bg-white">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden mr-3">
                                            <img src="https://readdy.ai/api/search-image?query=typescript%20programming%20language%2C%20modern%20development%20concept%2C%20clean%20professional%20image&width=100&height=100&seq=5&orientation=squarish" alt="Course" className="w-full h-full object-cover"/>
                                        </div>
                                        <div>
                                            <h6 className="font-medium text-gray-900">TypeScript Fundamentals</h6>
                                            <p className="text-xs text-gray-500">Programming</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Draft</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium">-</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500">-</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    June 28, 2025
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-eye-line"></i>
                                            </div>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <div className="w-5 h-5 flex items-center justify-center">
                                                <i className="ri-more-2-fill"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
                <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">12</span> courses
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed !rounded-button whitespace-nowrap" disabled>
                            Previous
                        </button>
                        <button className="px-3 py-1 bg-primary text-white rounded-md text-sm !rounded-button whitespace-nowrap">
                            1
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm !rounded-button whitespace-nowrap">
                            2
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm !rounded-button whitespace-nowrap">
                            3
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm !rounded-button whitespace-nowrap">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstructorMyCourses