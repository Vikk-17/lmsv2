import {useEffect,useState,useRef} from 'react';
import useCourseStore from '../../../store/courseStore';
function AddLesson({onClose,lmid}) {
    
    const{moduleInfo,createVideo,videosInfo} = useCourseStore();
    const inputRefs = useRef([]);
    
    function formatBytes(bytes) {
        if(!bytes) return false;
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    
    const [file,setFile] = useState(null);
    const [videoInfo,setVideoInfo] = useState({title:'', description:'',  duration:'', module:lmid, preview:false});

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        console.log(videosInfo);
        console.log(moduleInfo);
        return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        };

    }, []);

    const handleChange = (e)=>{
        const { name, type, checked, value } = e.target;
            setVideoInfo((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    }
 
 

    const handleForm = async (e)=>{ 
        e.preventDefault();
        e.stopPropagation(); 
        let valid = true;
        inputRefs.current.forEach((input) => {
            if (!input.value) {
                input.setCustomValidity("Field is required!");
                input.reportValidity();
                valid=false
            } else {
                input.setCustomValidity("");
            }
        });
        if(valid){ 
            const {module} = videoInfo;
            const res = await createVideo({videoInfo,file},module);
            res && onClose();
        }
       
    }

  return (
    <div className="bg-gray-900/30  backdrop-blur-xs fixed  inset-0 top-0 z-20  ">
            <div className='w-1/2 mx-auto mt-16 bg-white rounded-lg  shadow-sm border border-gray-200 overflow-hidden '>
                <div className="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                    <h3 className="text-lg font-medium text-white ">Add New Lesson</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="lesson-title" className="block text-sm font-medium text-gray-700 mb-1">Lesson Title</label>
                                <input ref={(el) => (inputRefs.current[0] = el)} onChange={handleChange} name='title' value={videoInfo?.title} type="text" id="lesson-title" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter lesson title"/>
                            </div>
                            <div>
                                <label htmlFor="module-select" className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                                <div className="relative">
                                    <select name='module' value={videoInfo.module} onChange={handleChange} id="module-select" className="block w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm appearance-none" >
                                        {moduleInfo?.map((mod)=>(
                                            <option key={mod.mid} value={mod.mid} >{mod.title}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Video Upload</label>
                            <div className="file-upload-container relative flex flex-col items-center justify-center h-40 rounded-lg">
                                <input ref={(el) => (inputRefs.current[1] = el)}   onChange={handleFileChange} type="file" className="file-upload-input" accept="video/mp4,video/quicktime"/>
                                <div className="w-12 h-12 mb-3 flex items-center justify-center text-gray-400">
                                    <i className="ri-upload-cloud-line ri-2x"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">{file?.name||'Drag and drop your video file here'}</p>
                                    <p className="text-xs text-gray-500 mt-1">{formatBytes(file?.size) || 'MP4 or MOV up to 2GB'}</p>
                                </div>
                                <button type="button" className="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                    Browse Files
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lesson-description" className="block text-sm font-medium text-gray-700 mb-1">Lesson Description</label>
                            <textarea onChange={handleChange} name='description' value={videoInfo?.name} ref={(el) => (inputRefs.current[2] = el)}  id="lesson-description" rows="3" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter a brief description of this lesson"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                                <label for='toggle-switch' className="inline-flex items-center">
                                    <input name='preview' onChange={handleChange} checked={videoInfo.name} id='toggle-switch'  type="checkbox" />
                                    <span className="ml-3 text-sm select-none font-medium text-gray-700">Make this lesson free preview</span>
                                </label>
                            <div className="flex space-x-3">
                                <button onClick={onClose} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                    Cancel
                                </button>
                                <button onClick={handleForm} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-indigo-700 focus:outline-none whitespace-nowrap">
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