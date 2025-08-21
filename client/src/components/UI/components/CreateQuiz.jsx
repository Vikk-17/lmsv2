import { useEffect } from "react";
function CreateQuiz({onClose}) {
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
    <div className="bg-gray-900/30  backdrop-blur-xs fixed inset-0 top-0 z-20  ">
        <div id="quiz-form" className="bg-white max-w-5xl  mt-16 mx-auto rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 ">
            <div className="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                <h3 className="text-lg font-medium text-white">Create New Quiz</h3>
            </div>
            <div className="p-6">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="quiz-title" className="block text-sm font-medium text-gray-700 mb-1">Quiz Title</label>
                            <input type="text" id="quiz-title" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter quiz title"/>
                        </div>
                        <div>
                            <label htmlFor="module-select" className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                            <div className="relative">
                                <select id="module-select" className="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm appearance-none">
                                    <option value="1">Module 1: HTML Fundamentals</option>
                                    <option value="2">Module 2: CSS Styling</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                                        <i className="ri-arrow-down-s-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div>
                            <label htmlFor="time-limit" className="block text-sm font-medium text-gray-700 mb-1">Time Limit (minutes)</label>
                            <input type="number" id="time-limit" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="15" min="1" max="180"/>
                        </div>
                        <div>
                            <label htmlFor="passing-score" className="block text-sm font-medium text-gray-700 mb-1">Passing Score (%)</label>
                            <input type="number" id="passing-score" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="70" min="1" max="100"/>
                        </div>
                        <div>
                            <label htmlFor="attempts-allowed" className="block text-sm font-medium text-gray-700 mb-1">Attempts Allowed</label>
                            <input type="number" id="attempts-allowed" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Unlimited" min="1" max="10"/>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="quiz-description" className="block text-sm font-medium text-gray-700 mb-1">Quiz Description</label>
                        <textarea id="quiz-description" rows="3" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter a brief description of this quiz"></textarea>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <label className="toggle-switch">
                                <input type="checkbox"/>
                                <span className="toggle-slider"></span>
                            </label>
                            <span className="ml-3 text-sm font-medium text-gray-700">Randomize question order</span>
                        </div>
                        <div className="flex space-x-3">
                            <button onClick={onClose} type="button" id="cancel-quiz-btn" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Cancel
                            </button>
                            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                                Add Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateQuiz;