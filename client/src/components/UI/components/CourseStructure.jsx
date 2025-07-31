import { useState } from 'react'
import AddLesson from './AddLesson';
import AddModule from './AddModule';

function CourseStructure() {
    const[showAddLesson,setShowAddLesson] = useState(false);
    const[showAddModule,setShowAddModule] = useState(false);
    return (
        <div className=''>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                                <div class="flex justify-between items-center">
                                    <h3 class="text-lg font-medium text-gray-900">Course Structure</h3>
                                    <button onClick={()=>setShowAddModule(true)} type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                                        <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                            <i class="ri-add-line"></i>
                                        </div>
                                    Add Module
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
                                                
                                                <button onClick={()=>setShowAddLesson(true)} type="button" class="flex items-center justify-center w-full p-3 border border-dashed border-gray-300 rounded-md text-sm font-medium text-primary hover:bg-indigo-50 focus:outline-none">
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
                                                
                                                <button onClick={()=>setShowAddLesson(true)} type="button" class="flex items-center justify-center w-full p-3 border border-dashed border-gray-300 rounded-md text-sm font-medium text-primary hover:bg-indigo-50 focus:outline-none">
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
            {showAddLesson && <AddLesson onClose={()=>setShowAddLesson(false)}/>}
            {showAddModule && <AddModule onClose={()=>setShowAddModule(false)}/>}
        </div>
    )
}

export default CourseStructure;