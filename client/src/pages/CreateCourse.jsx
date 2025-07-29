import React from 'react'

function CreateCourse() {
  return (
    <div className='relative'>
        <div class="bg-white sticky top-16 z-10  ">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between py-4">
                    <div class="w-1/4 progress-step completed">
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-[var(--clr-accent-900)] bg-primary text-gray-500 text-sm font-medium">1</div>
                            <div class="mt-2 text-xs font-medium text-gray-900">Course Info</div>
                        </div>
                    </div>
                    <div class="w-1/4 progress-step active">
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-primary text-sm font-medium">2</div>
                            <div class="mt-2 text-xs font-medium text-gray-900">Modules & Videos</div>
                        </div>
                    </div>
                    <div class="w-1/4 progress-step">
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium">3</div>
                            <div class="mt-2 text-xs font-medium text-gray-500">Test & Review</div>
                        </div>
                    </div>
                    <div class="w-1/4 progress-step">
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium">4</div>
                            <div class="mt-2 text-xs font-medium text-gray-500">Publish</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="  mx-4 my-6 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div class="p-6 border-b border-gray-100">
                        <h2 class="text-lg font-semibold text-gray-900">Course Information</h2>
                    </div>
                    
                    <div class="p-6">
                        <div class="mb-6"> 
                            <div class="ml-11">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label for="course-title" class="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                                        <input type="text" id="course-title" class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="e.g. Advanced JavaScript Techniques"/>
                                    </div>
                                    
                                    <div>
                                        <label for="course-category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                        <div class="relative">
                                            <select id="course-category" class="w-full p-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary focus:border-primary pr-8">
                                                <option value="">Select a category</option>
                                                <option value="web-design">Web Design</option>
                                                <option value="programming">Programming</option>
                                                <option value="mobile-dev">Mobile Development</option>
                                                <option value="data-science">Data Science</option>
                                                <option value="ux-ui">UX/UI Design</option>
                                            </select>
                                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <div class="w-4 h-4 flex items-center justify-center text-gray-400">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="md:col-span-2">
                                        <label for="course-description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea id="course-description" rows="4" class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Describe your course..."></textarea>
                                    </div>
                                    
                                    <div>
                                        <label for="course-level" class="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
                                        <div class="flex space-x-4">
                                            <label class="inline-flex items-center">
                                                <input type="radio" name="skill-level" value="beginner" class="custom-checkbox"/>
                                                <span class="ml-2 text-sm text-gray-700">Beginner</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                                <input type="radio" name="skill-level" value="intermediate" class="custom-checkbox" checked/>
                                                <span class="ml-2 text-sm text-gray-700">Intermediate</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                                <input type="radio" name="skill-level" value="advanced" class="custom-checkbox"/>
                                                <span class="ml-2 text-sm text-gray-700">Advanced</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label for="course-language" class="block text-sm font-medium text-gray-700 mb-1">Language</label>
                                        <div class="relative">
                                            <select id="course-language" class="w-full p-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary focus:border-primary pr-8">
                                                <option value="en">English</option>
                                                <option value="es">Spanish</option>
                                                <option value="fr">French</option>
                                                <option value="de">German</option>
                                                <option value="zh">Chinese</option>
                                            </select>
                                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <div class="w-4 h-4 flex items-center justify-center text-gray-400">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="md:col-span-2">
                                        <label for="course-tags" class="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                                        <input type="text" id="course-tags" class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="e.g. javascript, web development, coding"/>
                                        <p class="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-6 border-t border-gray-100 flex justify-between">
                        <button class="px-4 py-2 border border-gray-300 rounded-button text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap">Save as Draft</button>
                        <div class="space-x-3">
                            <button class="px-4 py-2 border border-gray-300 rounded-button text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap">Preview</button>
                            <button class="px-4 py-2 bg-[var(--clr-accent-900)] text-white rounded-button hover:bg-primary/90 !rounded-button whitespace-nowrap">Publish Course</button>
                        </div>
                    </div>
        </div>
        <div class="mx-4 hidden my-6 ">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900">Modern Web Development</h2>
                            <p class="text-sm text-gray-500 mt-1">Last edited: July 5, 2025</p>
                        </div>
                        <div class="flex space-x-3">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                    <i class="ri-eye-line"></i>
                                </div>
                                Preview
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-primary text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                    <i class="ri-save-line"></i>
                                </div>
                                Save Progress
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                        <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-medium text-gray-900">Course Structure</h3>
                                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-primary text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                    <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                        <i class="ri-add-line"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="space-y-4">
                                <div class="module-item border border-gray-200 rounded-lg overflow-hidden">
                                    <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                <i class="ri-drag-move-line"></i>
                                            </div>
                                            <h4 class="text-base font-medium text-gray-900">Module 1: HTML Fundamentals</h4>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-edit-line"></i>
                                                </div>
                                            </button>
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-delete-bin-line"></i>
                                                </div>
                                            </button>
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="p-4 bg-white">
                                        <div class="space-y-3">
                                            <div class="lesson-item flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                        <i class="ri-drag-move-line"></i>
                                                    </div>
                                                    <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                        <i class="ri-video-line"></i>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-800">Introduction to HTML</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span class="text-xs text-gray-500">12:45</span>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-edit-line"></i>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-delete-bin-line"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="lesson-item flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                        <i class="ri-drag-move-line"></i>
                                                    </div>
                                                    <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                        <i class="ri-video-line"></i>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-800">HTML Document Structure</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span class="text-xs text-gray-500">18:22</span>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-edit-line"></i>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-delete-bin-line"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="lesson-item flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                        <i class="ri-drag-move-line"></i>
                                                    </div>
                                                    <div class="w-6 h-6 mr-3 flex items-center justify-center text-green-600 bg-green-50 rounded-full">
                                                        <i class="ri-file-text-line"></i>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-800">HTML Elements Reference Guide</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span class="text-xs text-gray-500">PDF</span>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-edit-line"></i>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-delete-bin-line"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <button type="button" class="flex items-center justify-center w-full p-3 border border-dashed border-gray-300 rounded-md text-sm font-medium text-primary hover:bg-indigo-50 focus:outline-none">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center">
                                                    <i class="ri-add-line"></i>
                                                </div>
                                                Add Lesson
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="module-item border border-gray-200 rounded-lg overflow-hidden">
                                    <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                <i class="ri-drag-move-line"></i>
                                            </div>
                                            <h4 class="text-base font-medium text-gray-900">Module 2: CSS Styling</h4>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-edit-line"></i>
                                                </div>
                                            </button>
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-delete-bin-line"></i>
                                                </div>
                                            </button>
                                            <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="p-4 bg-white">
                                        <div class="space-y-3">
                                            <div class="lesson-item flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                        <i class="ri-drag-move-line"></i>
                                                    </div>
                                                    <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                        <i class="ri-video-line"></i>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-800">CSS Basics & Selectors</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span class="text-xs text-gray-500">20:15</span>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-edit-line"></i>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-delete-bin-line"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="lesson-item flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <div class="drag-handle w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                                                        <i class="ri-drag-move-line"></i>
                                                    </div>
                                                    <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                        <i class="ri-video-line"></i>
                                                    </div>
                                                    <span class="text-sm font-medium text-gray-800">Box Model & Layout</span>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span class="text-xs text-gray-500">16:48</span>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-edit-line"></i>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                        <div class="w-5 h-5 flex items-center justify-center">
                                                            <i class="ri-delete-bin-line"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <button type="button" class="flex items-center justify-center w-full p-3 border border-dashed border-gray-300 rounded-md text-sm font-medium text-primary hover:bg-indigo-50 focus:outline-none">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center">
                                                    <i class="ri-add-line"></i>
                                                </div>
                                                Add Lesson
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                        <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <h3 class="text-lg font-medium text-gray-900">Add New Lesson</h3>
                        </div>
                        <div class="p-6">
                            <div class="space-y-6">
                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label for="lesson-title" class="block text-sm font-medium text-gray-700 mb-1">Lesson Title</label>
                                        <input type="text" id="lesson-title" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter lesson title"/>
                                    </div>
                                    <div>
                                        <label for="module-select" class="block text-sm font-medium text-gray-700 mb-1">Module</label>
                                        <div class="relative">
                                            <select id="module-select" class="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm appearance-none">
                                                <option value="1">Module 1: HTML Fundamentals</option>
                                                <option value="2">Module 2: CSS Styling</option>
                                            </select>
                                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <div class="w-5 h-5 flex items-center justify-center text-gray-400">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Lesson Type</label>
                                    <div class="flex space-x-4">
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="lesson-type" value="video" class="h-4 w-4 text-primary border-gray-300 focus:ring-primary" checked/>
                                            <span class="ml-2 text-sm text-gray-700">Video</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="lesson-type" value="document" class="h-4 w-4 text-primary border-gray-300 focus:ring-primary"/>
                                            <span class="ml-2 text-sm text-gray-700">Document</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="lesson-type" value="quiz" class="h-4 w-4 text-primary border-gray-300 focus:ring-primary"/>
                                            <span class="ml-2 text-sm text-gray-700">Quiz</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Video Upload</label>
                                    <div class="file-upload-container relative flex flex-col items-center justify-center h-40 rounded-lg">
                                        <input type="file" class="file-upload-input" accept="video/mp4,video/quicktime"/>
                                        <div class="w-12 h-12 mb-3 flex items-center justify-center text-gray-400">
                                            <i class="ri-upload-cloud-line ri-2x"></i>
                                        </div>
                                        <p class="text-sm font-medium text-gray-700">Drag and drop your video file here</p>
                                        <p class="text-xs text-gray-500 mt-1">MP4 or MOV up to 2GB</p>
                                        <button type="button" class="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                            Browse Files
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label for="lesson-description" class="block text-sm font-medium text-gray-700 mb-1">Lesson Description</label>
                                    <textarea id="lesson-description" rows="3" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter a brief description of this lesson"></textarea>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Additional Resources (Optional)</label>
                                    <div class="file-upload-container relative flex flex-col items-center justify-center h-32 rounded-lg">
                                        <input type="file" class="file-upload-input" multiple/>
                                        <div class="w-10 h-10 mb-2 flex items-center justify-center text-gray-400">
                                            <i class="ri-file-upload-line ri-lg"></i>
                                        </div>
                                        <p class="text-sm font-medium text-gray-700">Upload supplementary files</p>
                                        <p class="text-xs text-gray-500 mt-1">PDF, DOC, ZIP up to 100MB</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <label class="toggle-switch">
                                            <input type="checkbox" checked/>
                                            <span class="toggle-slider"></span>
                                        </label>
                                        <span class="ml-3 text-sm font-medium text-gray-700">Make this lesson free preview</span>
                                    </div>
                                    <div class="flex space-x-3">
                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                            Cancel
                                        </button>
                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-primary text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                            Add Lesson
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-between mt-8">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                            <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                <i class="ri-arrow-left-line"></i>
                            </div>
                            Back to Course Info
                        </button>
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-primary text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                            Continue to Test & Review
                            <div class="w-4 h-4 ml-2 flex items-center justify-center">
                                <i class="ri-arrow-right-line"></i>
                            </div>
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default CreateCourse