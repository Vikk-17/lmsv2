import {useEffect} from 'react'

function AddModule({onClose}) {
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
            <div className='w-1/2 mx-auto mt-32 bg-white rounded-lg  shadow-sm border border-gray-200 overflow-hidden '>
                <div class="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                    <h3 class="text-lg font-medium text-white ">Add New Module</h3>
                </div>
                <div class="px-6 pt-6 pb-10">
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label for="lesson-title" class="block text-sm font-medium text-gray-700 mb-1">Module Title</label>
                                <input type="text" id="lesson-title" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter module title"/>
                            </div>
                                <div>
                                <label  for="order" class="block text-sm font-medium text-gray-700 mb-1">Module order</label>
                                <input min="1" type="number" id="order" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter module order"/>
                            </div>
                        </div>
                        <div class="space-x-3 flex justify-end">
                            <button onClick={onClose} type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Cancel
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                Add Module
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModule