import React from 'react'
import useCourseStore from '../../../store/courseStore';

function SuccessPublished() {
    const {courseInfo} = useCourseStore()
  return (
    <div className='px-20 mt-8'>
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-40   h-24 rounded overflow-hidden flex-shrink-0">
                <img src="https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20professional%20course%20thumbnail&width=160&height=90&seq=5&orientation=landscape" alt="Digital Marketing Course" className="w-full h-full object-cover object-top"/>
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-1">{courseInfo?.title}</h3>
                <p className="text-sm text-[var(--clr-primary-400)] mb-2">{courseInfo?.description}</p>
                <div className="flex items-center">
                    <span className="bg-green-200 bg-opacity-10 text-green-800 text-xs font-medium px-3 py-0.5 rounded-full">Publish</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessPublished;