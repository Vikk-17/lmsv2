
import useCourseStore from '../../../store/courseStore';

function CourseInfo() {
    const {courseInfo, updateCourseInfo} = useCourseStore();
    const handleChange = (e)=>{
        const {name,value} = e.target;
        updateCourseInfo({ [name]: value});
    }

    return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Enter valid input</h2>
        </div>
        <div className="p-6">
            <div className="mb-6">
                <div className="ml-11">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="course-title" className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                                <input onChange={handleChange} name='title' value={courseInfo?.title} required type="text" id="course-title" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--clr-accent-900)] focus:border-transparent outline-none" placeholder="e.g. Advanced JavaScript Techniques"/>
                            </div>
                            <div>
                                <label htmlFor="course-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <div className="relative">
                                    <select required onChange={handleChange} name='category' value={courseInfo?.category} className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none outline-none focus:ring-2 focus:border-transparent focus:ring-[var(--clr-accent-900)]  pr-8">
                                        <option value="">Select a category</option>
                                        <option value="web-design">Web Design</option>
                                        <option value="programming">Programming</option>
                                        <option value="mobile-dev">Mobile Development</option>
                                        <option value="data-science">Data Science</option>
                                        <option value="ux-ui">UX/UI Design</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <div className="w-4 h-4 flex items-center justify-center text-gray-400">
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="course-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea required minLength={10} onChange={handleChange} name='description' value={courseInfo?.description} id="course-description" rows="4" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--clr-accent-900)] focus:border-transparent outline-none" placeholder="Describe your course..."></textarea>
                            </div>
                            <div>
                                <label htmlFor="course-level" className="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
                                <div className="flex space-x-4">
                                    <label className="inline-flex items-center">
                                        <input required type="radio" checked={courseInfo?.skillLevel ==='beginner'} onChange={handleChange} name="skillLevel" value="beginner" className="custom-checkbox"/>
                                        <span className="ml-2 text-sm text-gray-700">Beginner</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input required type="radio" checked={courseInfo?.skillLevel ==='intermediate'} onChange={handleChange} name="skillLevel" value="intermediate" className="custom-checkbox" />
                                        <span className="ml-2 text-sm text-gray-700">Intermediate</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input required type="radio" checked={courseInfo?.skillLevel ==='advanced'} onChange={handleChange} name="skillLevel" value="advanced" className="custom-checkbox"/>
                                        <span className="ml-2 text-sm text-gray-700">Advanced</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="course-language" className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                                <div className="relative">
                                    <select onChange={handleChange} name='language' value={courseInfo?.language}  id="course-language" className="w-full p-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[var(--clr-accent-900)] focus:border-transparent outline-none pr-8">
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                        <option value="zh">Chinese</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <div className="w-4 h-4 flex items-center justify-center text-gray-400">
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
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