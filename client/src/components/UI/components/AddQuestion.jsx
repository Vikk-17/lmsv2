import {useEffect} from 'react'

function AddQuestion({onClose}) {
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
    <div className="bg-gray-900/30  backdrop-blur-xs fixed  inset-0 top-0 z-20  ">
        <div className='w-1/2 mx-auto mt-16  bg-white rounded-lg  shadow-sm border border-gray-200 overflow-hidden '>
            <div className="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                <h3 className="text-lg font-medium text-white ">Add New Question</h3>
            </div>
            <div className="px-6 pt-6 pb-10">
                <div id="questions-container" className="space-y-6">
                    <div className="question-item border border-gray-200 rounded-lg p-4">
                        <div>
                            <label htmlFor="question-1-text" className="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
                            <input type="text" id="question-1-text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your question"/>
                        </div>
                        <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Answer Options</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <label className="custom-checkbox mr-3">
                                        <input type="radio" name="correct-answer-1" checked/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 1"/>
                                </div>
                                <div className="flex items-center">
                                    <label className="custom-checkbox mr-3">
                                        <input type="radio" name="correct-answer-1"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 2"/>
                                </div>
                                <div className="flex items-center">
                                    <label className="custom-checkbox mr-3">
                                        <input type="radio" name="correct-answer-1"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 3"/>
                                </div>
                                <div className="flex items-center">
                                    <label className="custom-checkbox mr-3">
                                        <input type="radio" name="correct-answer-1"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 4"/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="question-1-feedback" className="block text-sm font-medium text-gray-700 mb-1">Feedback (Optional)</label>
                            <textarea id="question-1-feedback" rows="2" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Provide feedback for this question"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-x-3 flex p-6 justify-end">
                <button onClick={onClose} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                    Cancel
                </button>
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                    Add Question
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddQuestion