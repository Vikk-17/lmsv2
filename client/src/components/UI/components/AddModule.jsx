import {useEffect, useState,useRef} from 'react'

import useCourseStore from '../../../store/courseStore';
function AddModule({onClose}) {
    const {error,moduleCount,updateModuleCount,courseId, createModule,addModuleInfo,addVideosInfo} = useCourseStore();
    const [module,setModule] = useState({mid:'',title:'',course:courseId,video:[],quiz:[],assignment:[],order:moduleCount})
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        };
    }, []);

    const handleChange = (e)=>{
        const{name, value} = e.target;
        setModule(prev=>({...prev,[name]:value}));
    }

    const inputRef1 = useRef();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let valid = true;
        if (!inputRef1.current.value) {
            inputRef1.current.setCustomValidity("Field is required!");
            inputRef1.current.reportValidity();
            valid = false;
        } else {
            inputRef1.current.setCustomValidity("");
        }
       if(valid){
        const mid = await createModule(module,courseId);
        if(mid){
            addModuleInfo({...module,mid});
            updateModuleCount();
            addVideosInfo(mid,module?.title,[])
            onClose();
        }
        console.log(error);
       }
    }
    
    return (
        <div className="bg-gray-900/30  backdrop-blur-xs fixed  inset-0 top-0 z-20  ">
            <div className='w-1/2 mx-auto mt-32 bg-white rounded-lg  shadow-sm border border-gray-200 overflow-hidden '>
                <div className="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                    <h3 className="text-lg font-medium text-white ">Add New Module</h3>
                </div>
                <div className="px-6 pt-6 pb-10">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label  htmlFor="lesson-title" className="block text-sm font-medium text-gray-700 mb-1">Module Title</label>
                                <input ref={inputRef1}  required onChange={handleChange} name='title' value={module.title} type="text" id="lesson-title" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter module title"/>
                            </div>
                                <div>
                                <label  htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">Module order</label>
                                <input  required onChange={handleChange}  name='order' value={module.order}  min="1" type="number" id="order" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter module order"/>
                            </div>
                        </div>
                        <div className="space-x-3 flex justify-end">
                            <button onClick={onClose} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Cancel
                            </button>
                            <button  type='submit' onClick={handleSubmit} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
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