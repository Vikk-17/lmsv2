import CourseInfo from '../components/UI/components/CourseInfo';
import CourseStructure from '../components/UI/components/CourseStructure';
import QuizAssignment from '../components/UI/components/QuizAssignment';
import CoursePublish from '../components/UI/components/CoursePublish';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function CreateCourse() {
    const [componentCount, setComponentCount] = useState(1);
    const [CreateCourseComponent, setCreateCourseComponent] = useState(()=>CourseInfo);

    useEffect(()=>{
        switch(componentCount){
            case 1:
                setCreateCourseComponent(()=>CourseInfo);
                break;
            case 2:
                setCreateCourseComponent(()=>CourseStructure);
                break;
            case 3: 
                setCreateCourseComponent(()=>QuizAssignment);
                break;
            case 4:
                setCreateCourseComponent(()=>CoursePublish);
                break;
        }
    },[componentCount]);

    const increaseComponentCount = ()=>{
        if(componentCount<=4) setComponentCount(prev=>prev+1);
    }

    const decreaseComponentCount = ()=>{
        if(componentCount>1) setComponentCount(prev=>prev-1);
    }

  return (
    <div className=' bg-white'>
        <div class="bg-white sticky top-16 z-10  ">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between py-4">
                    <div class={clsx('w-1/4 progress-step',componentCount<=1? componentCount===1 &&'active':'completed')}>
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300  text-gray-500 text-sm font-medium progress-step-number">1</div>
                            <div class="mt-2 text-xs font-medium text-gray-900">Course Info</div>
                        </div>
                    </div>
                    <div class={clsx('w-1/4 progress-step',componentCount<=2? componentCount===2 && 'active':'completed')}>
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium progress-step-number">2</div>
                            <div class="mt-2 text-xs font-medium text-gray-900">Modules & Videos</div>
                        </div>
                    </div>
                    <div class={clsx('w-1/4 progress-step',componentCount<=3? componentCount===3 && 'active':'completed')}>
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium progress-step-number">3</div>
                            <div class="mt-2 text-xs font-medium text-gray-500">Test & Review</div>
                        </div>
                    </div>
                    <div class={clsx('w-1/4 progress-step',componentCount<=4? componentCount===4  && 'active':'completed')}>
                        <div class="flex flex-col items-center">
                            <div class=" w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 text-sm font-medium progress-step-number">4</div>
                            <div class="mt-2 text-xs font-medium text-gray-500">Publish</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mx-4 my-6'>
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">Create New Course</h2>
                    <p class="text-sm text-gray-500 mt-1">Last edited: July 5, 2025</p>
                </div>
                <div class="flex space-x-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                        <div class="w-4 h-4 mr-2 flex items-center justify-center">
                            <i class="ri-eye-line"></i>
                        </div>
                        Preview
                    </button>
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                        <div class="w-4 h-4 mr-2 flex items-center justify-center">
                            <i class="ri-save-line"></i>
                        </div>
                        Save Progress
                    </button>
                </div>
            </div>
             <CreateCourseComponent/>
            <div class="flex justify-between mt-8">
                <button onClick={decreaseComponentCount} type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                    <div class="w-4 h-4 mr-2 flex items-center justify-center">
                        <i class="ri-arrow-left-line"></i>
                    </div>
                    Back to Course Info
                </button>
                <button onClick={increaseComponentCount} type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
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