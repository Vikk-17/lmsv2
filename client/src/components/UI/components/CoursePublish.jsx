import React from 'react'

function CoursePublish() {
  return (
    <div className='course-publish'>
        <div class="bg-white rounded-lg shadow-sm mb-8">
                <div class="px-6 py-4 border-b border-gray-100">
                    <h3 class="text-lg font-medium text-gray-800">Course Visibility</h3>
                </div>
                <div class="px-6 py-5">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h4 class="text-base font-medium text-gray-800">Make course public</h4>
                            <p class="text-sm text-gray-600 mt-1">When enabled, your course will be visible to all users on the platform</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked />
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Access Control</label>
                            <div class="relative ">
                                <select class="w-full border   border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                                    <option>Open to everyone</option>
                                    <option>Invite only</option>
                                    <option>Password protected</option>
                                </select>
                                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <div class="w-4 h-4 flex items-center justify-center text-gray-500">
                                        <i class="ri-arrow-down-s-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Student Limit</label>
                            <div class="relative">
                                <input type="number" value="100" class="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <span class="text-sm text-gray-500">students</span>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Leave empty for unlimited students</p>
                        </div>
                    </div>
                </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mb-8">
            <div class="px-6 py-4 border-b border-gray-100">
                <h3 class="text-lg font-medium text-gray-800">Pricing Configuration</h3>
            </div>
            <div class="px-6 py-5">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h4 class="text-base font-medium text-gray-800">Make course paid</h4>
                        <p class="text-sm text-gray-600 mt-1">When enabled, students will need to pay to access your course</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked />
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Price</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span class="text-gray-500">$</span>
                            </div>
                            <input type="number" value="49.99" class="w-full border border-gray-300 rounded text-gray-700 py-2 pl-7 pr-3 bg-white focus:border-primary"/>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <div class="relative">
                            <select class="w-full border border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                                <option>USD - US Dollar</option>
                                <option>EUR - Euro</option>
                                <option>GBP - British Pound</option>
                                <option>JPY - Japanese Yen</option>
                                <option>CAD - Canadian Dollar</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <div class="w-4 h-4 flex items-center justify-center text-gray-500">
                                    <i class="ri-arrow-down-s-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Pricing Model</label>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="border border-gray-300 rounded p-4 cursor-pointer bg-gray-50">
                            <div class="flex items-center">
                                <div class="w-5 h-5 flex items-center justify-center mr-3">
                                    <div class="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                                        <div class="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="text-sm font-medium text-gray-800">One-time Payment</h5>
                                    <p class="text-xs text-gray-600 mt-1">Students pay once for lifetime access</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="border border-gray-300 rounded p-4 cursor-pointer">
                            <div class="flex items-center">
                                <div class="w-5 h-5 flex items-center justify-center mr-3">
                                    <div class="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                                    </div>
                                </div>
                                <div>
                                    <h5 class="text-sm font-medium text-gray-800">Subscription</h5>
                                    <p class="text-xs text-gray-600 mt-1">Students pay recurring fee for access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-6">
                    <div class="flex items-center justify-between mb-2">
                        <label class="block text-sm font-medium text-gray-700">Discount Options</label>
                        <button class="text-sm text-primary font-medium">+ Add Discount</button>
                    </div>
                    <div class="border border-gray-300 rounded overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount Type</th>
                                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valid Until</th>
                                    <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Early Bird</td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">25%</td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">July 31, 2025</td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        <div class="flex space-x-2">
                                            <button class="text-gray-400 hover:text-gray-600">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-edit-line"></i>
                                                </div>
                                            </button>
                                            <button class="text-gray-400 hover:text-gray-600">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-delete-bin-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mb-8">
            <div class="px-6 py-4 border-b border-gray-100">
                <h3 class="text-lg font-medium text-gray-800">Launch Settings</h3>
            </div>
            <div class="px-6 py-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Launch Date</label>
                        <input type="date" value="2025-07-15" class="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                        <p class="text-xs text-gray-500 mt-1">When your course will be available to students</p>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                        <div class="relative">
                            <select class="w-full border border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                                <option>UTC-08:00 Pacific Time (US & Canada)</option>
                                <option>UTC-05:00 Eastern Time (US & Canada)</option>
                                <option>UTC+00:00 London, Edinburgh</option>
                                <option>UTC+01:00 Berlin, Paris, Rome</option>
                                <option>UTC+08:00 Beijing, Hong Kong, Singapore</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <div class="w-4 h-4 flex items-center justify-center text-gray-500">
                                    <i class="ri-arrow-down-s-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-6">
                    <div class="flex items-center mb-4">
                        <div class="w-5 h-5 flex items-center justify-center mr-2">
                            <input type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" checked />
                        </div>
                        <label class="text-sm text-gray-700">Enable pre-launch enrollment</label>
                    </div>
                    <div class="flex items-center">
                        <div class="w-5 h-5 flex items-center justify-center mr-2">
                            <input type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"/>
                        </div>
                        <label class="text-sm text-gray-700">Send email notification to enrolled students when course launches</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mb-8">
            <div class="px-6 py-4 border-b border-gray-100">
                <h3 class="text-lg font-medium text-gray-800">Course Thumbnail</h3>
            </div>
            <div class="px-6 py-5">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="md:col-span-2">
                        <p class="text-sm text-gray-600 mb-4">Upload a high-quality image that represents your course. This will be displayed on course listings and promotional materials.</p>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <div class="mx-auto w-12 h-12 flex items-center justify-center text-gray-400 mb-3">
                                <i class="ri-image-add-line text-3xl"></i>
                            </div>
                            <p class="text-sm text-gray-600 mb-2">Drag and drop your image here</p>
                            <p class="text-xs text-gray-500 mb-4">PNG, JPG, or WEBP (Recommended: 1280×720px)</p>
                            <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-button text-sm hover:bg-gray-200 whitespace-nowrap">
                                Browse Files
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <p class="text-sm font-medium text-gray-700 mb-3">Preview</p>
                        <div class="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                            <img src="https://readdy.ai/api/search-image?query=modern%20web%20development%20coding%20programming%20html%20css%20javascript%20on%20laptop%20screen%20with%20clean%20modern%20workspace&width=400&height=225&seq=1&orientation=landscape" alt="Course thumbnail preview" class="w-full h-full object-cover"/>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">This is how your thumbnail will appear in course listings</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mb-8">
            <div class="px-6 py-4 border-b border-gray-100">
                <h3 class="text-lg font-medium text-gray-800">Promotional Settings</h3>
            </div>
            <div class="px-6 py-5">
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Course Preview Video</label>
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <div class="mx-auto w-12 h-12 flex items-center justify-center text-gray-400 mb-3">
                            <i class="ri-video-add-line text-3xl"></i>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Upload a short preview video of your course</p>
                        <p class="text-xs text-gray-500 mb-4">MP4 format, max 2 minutes (Recommended: 1280×720px)</p>
                        <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-button text-sm hover:bg-gray-200 whitespace-nowrap">
                            Upload Video
                        </button>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Course Tags</label>
                    <div class="relative">
                        <input type="text" placeholder="Add tags separated by commas" class="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Web Development
                            <button class="ml-1 text-blue-600 hover:text-blue-800">
                                <div class="w-4 h-4 flex items-center justify-center">
                                    <i class="ri-close-line"></i>
                                </div>
                            </button>
                        </span>
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            HTML
                            <button class="ml-1 text-blue-600 hover:text-blue-800">
                                <div class="w-4 h-4 flex items-center justify-center">
                                    <i class="ri-close-line"></i>
                                </div>
                            </button>
                        </span>
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            CSS
                            <button class="ml-1 text-blue-600 hover:text-blue-800">
                                <div class="w-4 h-4 flex items-center justify-center">
                                    <i class="ri-close-line"></i>
                                </div>
                            </button>
                        </span>
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            JavaScript
                            <button class="ml-1 text-blue-600 hover:text-blue-800">
                                <div class="w-4 h-4 flex items-center justify-center">
                                    <i class="ri-close-line"></i>
                                </div>
                            </button>
                        </span>
                    </div>
                    <p class="text-xs text-gray-500 mt-2">Popular tags: Frontend, Responsive Design, UX/UI, React, Node.js</p>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Course Category</label>
                    <div class="relative">
                        <select class="w-full border border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                            <option>Development</option>
                            <option>Business</option>
                            <option>Design</option>
                            <option>Marketing</option>
                            <option>Photography</option>
                            <option>Music</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <div class="w-4 h-4 flex items-center justify-center text-gray-500">
                                <i class="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="relative mt-3">
                        <select class="w-full border border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>Game Development</option>
                            <option>Software Engineering</option>
                            <option>Data Science</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <div class="w-4 h-4 flex items-center justify-center text-gray-500">
                                <i class="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm mb-8">
            <div class="px-6 py-4 border-b border-gray-100">
                <h3 class="text-lg font-medium text-gray-800">SEO Settings</h3>
            </div>
            <div class="px-6 py-5">
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                    <textarea rows="3" placeholder="Enter a description to improve your course's search visibility" class="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary">Learn modern web development with HTML, CSS, and JavaScript. This comprehensive course covers responsive design, CSS frameworks, and JavaScript fundamentals.</textarea>
                    <p class="text-xs text-gray-500 mt-1 flex justify-between">
                        <span>Recommended: 150-160 characters for optimal SEO</span>
                        <span>Characters: 156/160</span>
                    </p>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                    <input type="text" value="web development, HTML, CSS, JavaScript, responsive design, frontend" class="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                    <p class="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                    <div class="flex">
                        <span class="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            courses/
                        </span>
                        <input type="text" value="modern-web-development" class="flex-1 border border-gray-300 rounded-r text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">Use hyphens to separate words for better SEO</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursePublish