import {useState} from 'react'

function CourseInfo() {
    const [skill,setSkill] = useState("beginner");
    const handleChecked = (e)=>{
        setSkill(e.target.value);
    }
    return (
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
        <div class="p-6 border-b border-gray-100">
            <h2 class="text-lg font-semibold text-gray-900">Course Information</h2>
        </div>
        <div class="p-6">
            <div class="mb-6">
                <div class="ml-11">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="course-title" class="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                            <input type="text" id="course-title" class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--clr-accent-900)] focus:border-transparent outline-none" placeholder="e.g. Advanced JavaScript Techniques"/>
                        </div>

                        <div>
                            <label for="course-category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <div class="relative">
                                <select class="w-full p-2.5 border border-gray-300 rounded-lg appearance-none outline-none focus:ring-2 focus:border-transparent focus:ring-[var(--clr-accent-900)]  pr-8">
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
                            <textarea id="course-description" rows="4" class="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--clr-accent-900)] focus:border-transparent outline-none" placeholder="Describe your course..."></textarea>
                        </div>

                        <div>
                            <label for="course-level" class="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
                            <div class="flex space-x-4">
                                <label class="inline-flex items-center">
                                    <input type="radio" checked={skill==='beginner'} onChange={handleChecked} name="skill" value="beginner" class="custom-checkbox"/>
                                    <span class="ml-2 text-sm text-gray-700">Beginner</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" checked={skill==='intermediate'} onChange={handleChecked} name="skill" value="intermediate" class="custom-checkbox" />
                                    <span class="ml-2 text-sm text-gray-700">Intermediate</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" checked={skill==='advanced'} onChange={handleChecked} name="skill" value="advanced" class="custom-checkbox"/>
                                    <span class="ml-2 text-sm text-gray-700">Advanced</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label for="course-language" class="block text-sm font-medium text-gray-700 mb-1">Language</label>
                            <div class="relative">
                                <select id="course-language" class="w-full p-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[var(--clr-accent-900)] focus:border-transparent outline-none pr-8">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CourseInfo;