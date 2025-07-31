import {useEffect} from 'react'

function AddLesson({onClose}) {
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        };
    }, []);

  return (
    <div class="bg-gray-900/30  backdrop-blur-xs fixed  inset-0 top-0 z-20  ">
            <div className='w-1/2 mx-auto mt-10 bg-white rounded-lg  shadow-sm border border-gray-200 overflow-hidden '>
                <div class="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                    <h3 class="text-lg font-medium text-white ">Add New Lesson</h3>
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
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked/>
                                    <span class="toggle-slider"></span>
                                </label>
                                <span class="ml-3 text-sm font-medium text-gray-700">Make this lesson free preview</span>
                            </div>
                            <div class="flex space-x-3">
                                <button onClick={onClose} type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                    Cancel
                                </button>
                                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                    Add Lesson
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddLesson