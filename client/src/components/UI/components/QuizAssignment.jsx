import React from 'react'

function QuizAssignment() {
  return (
    <>
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                        <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-medium text-gray-900">Quizzes</h3>
                                <button type="button" id="add-quiz-btn" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                                    <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                        <i class="ri-add-line"></i>
                                    </div>
                                    Add New Quiz
                                </button>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="space-y-4">
                                <div class="quiz-item border border-gray-200 rounded-lg overflow-hidden">
                                    <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                <i class="ri-question-line"></i>
                                            </div>
                                            <h4 class="text-base font-medium text-gray-900">HTML Basics Quiz</h4>
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
                                            <button type="button" class="quiz-toggle p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="p-4 bg-white quiz-content">
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                                    <i class="ri-questionnaire-line"></i>
                                                </div>
                                                <div>
                                                    <p class="text-xs text-gray-500">Questions</p>
                                                    <p class="text-sm font-medium text-gray-900">10</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                                    <i class="ri-time-line"></i>
                                                </div>
                                                <div>
                                                    <p class="text-xs text-gray-500">Time Limit</p>
                                                    <p class="text-sm font-medium text-gray-900">15 minutes</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                                    <i class="ri-percent-line"></i>
                                                </div>
                                                <div>
                                                    <p class="text-xs text-gray-500">Passing Score</p>
                                                    <p class="text-sm font-medium text-gray-900">70%</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-4 space-y-3">
                                            <div class="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <span class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-3">1</span>
                                                    <span class="text-sm font-medium text-gray-800">What does HTML stand for?</span>
                                                </div>
                                                <div class="text-xs text-gray-500">Multiple Choice</div>
                                            </div>
                                            
                                            <div class="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <span class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-3">2</span>
                                                    <span class="text-sm font-medium text-gray-800">Which tag is used to create a hyperlink?</span>
                                                </div>
                                                <div class="text-xs text-gray-500">Multiple Choice</div>
                                            </div>
                                            
                                            <div class="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                                                <div class="flex items-center">
                                                    <span class="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-3">3</span>
                                                    <span class="text-sm font-medium text-gray-800">Which HTML element is used to define the title of a document?</span>
                                                </div>
                                                <div class="text-xs text-gray-500">Multiple Choice</div>
                                            </div>
                                            
                                            <button type="button" class="flex items-center text-primary text-sm font-medium hover:text-indigo-700 focus:outline-none mt-2">
                                                <div class="w-4 h-4 mr-1 flex items-center justify-center">
                                                    <i class="ri-eye-line"></i>
                                                </div>
                                                View all 10 questions
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="quiz-item border border-gray-200 rounded-lg overflow-hidden">
                                    <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                                        <div class="flex items-center">
                                            <div class="w-6 h-6 mr-3 flex items-center justify-center text-primary bg-indigo-50 rounded-full">
                                                <i class="ri-question-line"></i>
                                            </div>
                                            <h4 class="text-base font-medium text-gray-900">CSS Fundamentals Quiz</h4>
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
                                            <button type="button" class="quiz-toggle p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                                <div class="w-6 h-6 flex items-center justify-center">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="p-4 bg-white quiz-content hidden">
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                                    <i class="ri-questionnaire-line"></i>
                                                </div>
                                                <div>
                                                    <p class="text-xs text-gray-500">Questions</p>
                                                    <p class="text-sm font-medium text-gray-900">8</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                                    <i class="ri-time-line"></i>
                                                </div>
                                                <div>
                                                    <p class="text-xs text-gray-500">Time Limit</p>
                                                    <p class="text-sm font-medium text-gray-900">12 minutes</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center p-3 bg-gray-50 rounded-md">
                                                <div class="w-5 h-5 mr-2 flex items-center justify-center text-gray-500">
                                                    <i class="ri-percent-line"></i>
                                                </div>
                                                <div>
                                                    <p class="text-xs text-gray-500">Passing Score</p>
                                                    <p class="text-sm font-medium text-gray-900">75%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>

        <div id="quiz-form" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 ">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 class="text-lg font-medium text-gray-900">Create New Quiz</h3>
            </div>
            <div class="p-6">
                <div class="space-y-6">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label for="quiz-title" class="block text-sm font-medium text-gray-700 mb-1">Quiz Title</label>
                            <input type="text" id="quiz-title" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter quiz title"/>
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
                    
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div>
                            <label for="time-limit" class="block text-sm font-medium text-gray-700 mb-1">Time Limit (minutes)</label>
                            <input type="number" id="time-limit" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="15" min="1" max="180"/>
                        </div>
                        <div>
                            <label for="passing-score" class="block text-sm font-medium text-gray-700 mb-1">Passing Score (%)</label>
                            <input type="number" id="passing-score" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="70" min="1" max="100"/>
                        </div>
                        <div>
                            <label for="attempts-allowed" class="block text-sm font-medium text-gray-700 mb-1">Attempts Allowed</label>
                            <input type="number" id="attempts-allowed" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Unlimited" min="1" max="10"/>
                        </div>
                    </div>
                    
                    <div>
                        <label for="quiz-description" class="block text-sm font-medium text-gray-700 mb-1">Quiz Description</label>
                        <textarea id="quiz-description" rows="3" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter a brief description of this quiz"></textarea>
                    </div>
                    
                    <div class="border-t border-gray-200 pt-4">
                        <h4 class="text-base font-medium text-gray-900 mb-3">Questions</h4>
                        
                        <div id="questions-container" class="space-y-6">
                            <div class="question-item border border-gray-200 rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <h5 class="text-sm font-medium text-gray-900">Question 1</h5>
                                    <div class="flex items-center">
                                        <div class="question-type-selector">
                                            <button type="button" class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none">
                                                Multiple Choice
                                                <div class="w-4 h-4 ml-1 flex items-center justify-center">
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </div>
                                            </button>
                                            <div class="question-type-dropdown">
                                                <div class="question-type-option">Multiple Choice</div>
                                                <div class="question-type-option">True/False</div>
                                                <div class="question-type-option">Short Answer</div>
                                                <div class="question-type-option">Essay</div>
                                                <div class="question-type-option">Matching</div>
                                            </div>
                                        </div>
                                        <button type="button" class="ml-2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label for="question-1-text" class="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
                                    <input type="text" id="question-1-text" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your question"/>
                                </div>
                                
                                <div class="mt-3">
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Answer Options</label>
                                    <div class="space-y-2">
                                        <div class="flex items-center">
                                            <label class="custom-checkbox mr-3">
                                                <input type="radio" name="correct-answer-1" checked/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 1"/>
                                        </div>
                                        <div class="flex items-center">
                                            <label class="custom-checkbox mr-3">
                                                <input type="radio" name="correct-answer-1"/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 2"/>
                                        </div>
                                        <div class="flex items-center">
                                            <label class="custom-checkbox mr-3">
                                                <input type="radio" name="correct-answer-1"/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 3"/>
                                        </div>
                                        <div class="flex items-center">
                                            <label class="custom-checkbox mr-3">
                                                <input type="radio" name="correct-answer-1"/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Option 4"/>
                                        </div>
                                    </div>
                                    <button type="button" class="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none">
                                        <div class="w-3 h-3 mr-1 flex items-center justify-center">
                                            <i class="ri-add-line"></i>
                                        </div>
                                        Add Option
                                    </button>
                                </div>
                                
                                <div class="mt-3">
                                    <label for="question-1-feedback" class="block text-sm font-medium text-gray-700 mb-1">Feedback (Optional)</label>
                                    <textarea id="question-1-feedback" rows="2" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Provide feedback for this question"></textarea>
                                </div>
                            </div>
                        </div>
                        
                        <button type="button" id="add-question-btn" class="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                            <div class="w-4 h-4 mr-2 flex items-center justify-center">
                                <i class="ri-add-line"></i>
                            </div>
                            Add Question
                        </button>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <label class="toggle-switch">
                                <input type="checkbox"/>
                                <span class="toggle-slider"></span>
                            </label>
                            <span class="ml-3 text-sm font-medium text-gray-700">Randomize question order</span>
                        </div>
                        <div class="flex space-x-3">
                            <button type="button" id="cancel-quiz-btn" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Cancel
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-primary text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                Save Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium text-gray-900">Assignments</h3>
                    <button type="button" id="add-assignment-btn" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                        <div class="w-4 h-4 mr-2 flex items-center justify-center">
                            <i class="ri-add-line"></i>
                        </div>
                        Add Assignment
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Type</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 mr-3 flex items-center justify-center text-green-600 bg-green-50 rounded-full">
                                            <i class="ri-file-text-line"></i>
                                        </div>
                                        <div class="text-sm font-medium text-gray-900">Build a Responsive Website</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 15, 2025</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">File Upload</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HTML Fundamentals</td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex items-center justify-end space-x-2">
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-delete-bin-line"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-6 h-6 mr-3 flex items-center justify-center text-green-600 bg-green-50 rounded-full">
                                            <i class="ri-file-text-line"></i>
                                        </div>
                                        <div class="text-sm font-medium text-gray-900">CSS Layout Challenge</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 22, 2025</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">75</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">URL Submission</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CSS Styling</td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex items-center justify-end space-x-2">
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
                                                <i class="ri-edit-line"></i>
                                            </div>
                                        </button>
                                        <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <div class="w-5 h-5 flex items-center justify-center">
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
                     
                    
        <div id="assignment-form" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 class="text-lg font-medium text-gray-900">Create New Assignment</h3>
            </div>
            <div class="p-6">
                <div class="space-y-6">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label for="assignment-title" class="block text-sm font-medium text-gray-700 mb-1">Assignment Title</label>
                            <input type="text" id="assignment-title" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter assignment title"/>
                        </div>
                        <div>
                            <label for="assignment-module" class="block text-sm font-medium text-gray-700 mb-1">Module</label>
                            <div class="relative">
                                <select id="assignment-module" class="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm appearance-none">
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
                    
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div>
                            <label for="due-date" class="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                            <input type="date" id="due-date" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"/>
                        </div>
                        <div>
                            <label for="points" class="block text-sm font-medium text-gray-700 mb-1">Points</label>
                            <input type="number" id="points" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="100" min="1"/>
                        </div>
                        <div>
                            <label for="submission-type" class="block text-sm font-medium text-gray-700 mb-1">Submission Type</label>
                            <div class="relative">
                                <select id="submission-type" class="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm appearance-none">
                                    <option value="file">File Upload</option>
                                    <option value="text">Text Entry</option>
                                    <option value="url">Website URL</option>
                                    <option value="media">Media Recording</option>
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
                        <label for="assignment-description" class="block text-sm font-medium text-gray-700 mb-1">Assignment Description</label>
                        <textarea id="assignment-description" rows="5" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter detailed instructions for this assignment"></textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Attachment (Optional)</label>
                        <div class="file-upload-container relative flex flex-col items-center justify-center h-32 rounded-lg">
                            <input type="file" class="file-upload-input" multiple/>
                            <div class="w-10 h-10 mb-2 flex items-center justify-center text-gray-400">
                                <i class="ri-file-upload-line ri-lg"></i>
                            </div>
                            <p class="text-sm font-medium text-gray-700">Upload assignment files</p>
                            <p class="text-xs text-gray-500 mt-1">PDF, DOC, or other files up to 50MB</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <label class="toggle-switch">
                                <input type="checkbox"/>
                                <span class="toggle-slider"></span>
                            </label>
                            <span class="ml-3 text-sm font-medium text-gray-700">Allow late submissions</span>
                        </div>
                        <div class="flex space-x-3">
                            <button type="button" id="cancel-assignment-btn" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Cancel
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-primary text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
                                Save Assignment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuizAssignment