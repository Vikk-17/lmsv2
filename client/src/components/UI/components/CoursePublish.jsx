import {useEffect, useState} from 'react';
import AddDiscount from './AddDiscount';
import useCourseStore from '../../../store/courseStore';
import { uploadImage,uploadVideo } from '../../../api/courses';
import { toSlug,stringToArray } from '../../../utils/handleString';
function CoursePublish() {
    const[showAddDiscount,handleAddDiscount] = useState(false);
    const[isReload,setIsReload] = useState(true);
    const[charCount,setCharCount] = useState(0);
    const[thumbnail,setThumbnail] = useState(null);
    const[keywordString,setKeywordString] = useState('');
    const[slugString,setSlugString] = useState('');
    const[isLoading,setIsLoading] = useState(true);
    const[videoPreview,setVideoPreview] = useState(null);
    const[imgProgress,setImgProgress] = useState(null);
    const[previewProgress,setPreviewProgress] = useState(null);
    const {lifecycle,updateLifecycle,pricing,updatePricing,updateMetadata,metadata,addKeyword} = useCourseStore();
    useEffect(()=>{
        const handler = setTimeout(() => {
            addKeyword(stringToArray(keywordString));
            updateMetadata({slug:toSlug(slugString)});
            setSlugString(toSlug(slugString));
            if(isReload){
                setKeywordString((metadata?.keyword).join(", "));
                setSlugString((metadata?.slug));
            }
        }, 500);
        setIsReload(false);
        return () => clearTimeout(handler);
    },[keywordString,slugString]);

    const handleLifecycle = (e)=>{
        const {name,value} = e.target;
        updateLifecycle({[name]:value});
    }
    const handlePricing = (e)=>{
        const {name,value,type,checked} = e.target;
        updatePricing({[name]:type==='checkbox'?checked:value});
    }
    const handleMetadata = (e)=>{
        const {name,value} = e.target;
        updateMetadata({[name]:value});
    }
    const handleThumnailUpload = async (e)=>{
        const file = e.target.files[0];
        if(!file) return;
        setThumbnail(file);
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image',file);
        console.log(formData)
        try{
          await uploadImage(formData,(prg)=>{
            console.log(prg);
            setImgProgress(prg);
          },
          (data)=>{
            const {url} = data?.upload;
            updateMetadata({thumbnailUrl:url});
            setIsLoading(false);
          });
        }catch(err){
            console.log(err);
        }
    }

    const handlePreviewUpload= async (e)=>{
    const file = e.target.files[0];
        if(!file) return;
        setIsLoading(true)
        setVideoPreview(file);
        const formData = new FormData();
        formData.append('video',file);
        try{
        await uploadVideo(formData,(prg)=>{
        console.log(prg);
        setPreviewProgress(prg);
        },
        (data)=>{
        const {url} = data?.upload;
        updateMetadata({previewVideoUrl:url});
        setIsLoading(false);
        });
        }catch(err){
        console.log(err);
        }
    }

  return (
    <div className='course-publish'>
        <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-medium text-gray-800">Course Lifecycle</h3>
            </div>
            <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Visibility Control</label>
                        <div className="relative ">
                            <select required onChange={handleLifecycle} name='visibility' value={lifecycle?.visibility}  className="w-full border   border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                                <option value='public' >public</option>
                                <option value='private' >private</option>
                                <option value='unlisted' >unlisted</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <div className="w-4 h-4 flex items-center justify-center text-gray-500">
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Student Limit</label>
                        <div className="relative">
                            <input  name='limit' value={lifecycle?.limit} onChange={handleLifecycle} type="number"  className="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <span className="text-sm text-gray-500">students</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Leave empty for unlimited students</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-medium text-gray-800">Pricing Configuration</h3>
            </div>
            <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h4 className="text-base font-medium text-gray-800">Make course free</h4>
                        <p className="text-sm text-gray-600 mt-1">When enabled, students will not need to pay to access your course</p>
                    </div>
                    <label htmlFor='isfree' className="toggle-switch">
                        <input  id='isfree' name='isfree' type="checkbox" onChange={handlePricing} checked={pricing?.isfree} />
                    </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                        <div className="relative">
                            <div  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="text-gray-500">$</span>
                            </div>
                            <input required disabled={pricing?.isfree} type="number" name='price' value={pricing?.price} onChange={handlePricing} className="w-full border border-gray-300 rounded text-gray-700 py-2 pl-7 pr-3 bg-white focus:border-primary"/>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <div className="relative">
                            <select disabled={pricing?.isfree} name='currency' value={pricing?.currency} onChange={handlePricing} className="w-full border border-gray-300 rounded text-gray-700 py-2 pl-3 pr-8 bg-white focus:border-primary">
                                <option value='inr'>INR - IN Rupee</option>
                                <option value='usd'>USD - US Dollar</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <div className="w-4 h-4 flex items-center justify-center text-gray-500">
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">Discount Options</label>
                        <button disabled={pricing?.isfree} type='button' onClick={()=>handleAddDiscount(true)} className="text-sm text-primary font-medium">+ Add Discount</button>
                    </div>
                    <div className="border border-gray-300 rounded overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount Type</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valid Until</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {pricing?.discount.map((data,idx)=>(
                                <tr key={idx}>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data?.dtype}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data?.amount}%</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data?.valadity}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <div className="w-6 h-6 flex items-center justify-center">
                                                    <i className="ri-edit-line"></i>
                                                </div>
                                            </button>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <div className="w-6 h-6 flex items-center justify-center">
                                                    <i className="ri-delete-bin-line"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-medium text-gray-800">Course Thumbnail</h3>
            </div>
            <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 mb-4">Upload a high-quality image that represents your course. This will be displayed on course listings and promotional materials.</p>
                        <div className="file-upload-container relative flex flex-col items-center justify-center  rounded-lg">
                            <input required onChange={handleThumnailUpload}  type="file" accept="image/*" className="file-upload-input" />
                            <div className="w-12 h-12 mb-3 flex items-center justify-center text-gray-400">
                                <i className="ri-upload-cloud-line ri-2x"></i>
                            </div>
                            <div className='px-20'>
                                <p className="text-sm font-medium text-gray-700">{thumbnail?.name}Drag and drop your image file here</p>
                                {!imgProgress && <p className="text-xs text-gray-500 mt-1">JPG, PNG or WEBP up to 5MB</p> }
                               
                                {imgProgress && <div className="w-full">
                                    <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-200 transition-all duration-300 " style={{ width: `${imgProgress}%` }} ></div>
                                        <span className="absolute  inset-0 flex items-center justify-center text-xs font-semibold text-green-800">
                                        {imgProgress!==100?`uploading`:isLoading?`processing`:`success`}
                                        </span>
                                    </div>
                                </div>}
                            </div>
                            <button type="button" className="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Browse Files
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Preview</p>
                        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                            <img src={ metadata?.thumbnailUrl || `https://placehold.co/1280x720?text=preview`} alt="Course thumbnail preview" className="w-full h-full object-cover"/>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">This is how your thumbnail will appear in course listings</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-medium text-gray-800">Promotional Settings</h3>
            </div>
            <div className="px-6 py-5">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course Preview Video</label>
                    <div className="file-upload-container relative flex flex-col items-center justify-center  rounded-lg">
                        <input required onChange={handlePreviewUpload}  type="file" accept="video/*" className="file-upload-input" />
                        <div className="w-12 h-12 mb-3 flex items-center justify-center text-gray-400">
                            <i className="ri-upload-cloud-line ri-2x"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">{videoPreview?.name} Drag and drop your video file here</p>
                            {!previewProgress && <p className="text-xs text-gray-500 mt-1">MP4 or MOV up to 2GB</p> }
                             {previewProgress && 
                             <div className="w-full">
                                <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-200 transition-all duration-300 " style={{ width: `${previewProgress}%` }} ></div>
                                    <span className="absolute  inset-0 flex items-center justify-center text-xs font-semibold text-green-800">
                                    {previewProgress!==100?`uploading`:isLoading?`processing`:`success`}
                                    </span>
                                </div>
                            </div>}
                        </div>
                        <button type="button" className="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                            Browse Files
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-medium text-gray-800">SEO Settings</h3>
            </div>
            <div className="px-6 py-5">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                    <textarea required maxLength={160} name='metaDesc' value={metadata?.metaDesc} onChange={(e)=>{handleMetadata(e);setCharCount(prev=>prev+1)}} rows="3" placeholder="Enter a description to improve your course's search visibility" className="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"></textarea>
                    <p className="text-xs text-gray-500 mt-1 flex justify-between">
                        <span>Recommended: 150-160 characters for optimal SEO</span>
                        <span>Characters: {charCount}/160</span>
                    </p>
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                    <input name='keyword'  value={keywordString} onChange={(e)=>setKeywordString(e.target.value)} className="w-full border border-gray-300 rounded text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                    <p className="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            courses/
                        </span>
                        <input  required  type="text" name='slug' value={slugString} onChange={(e)=>setSlugString(e.target.value)} className="flex-1 border border-gray-300 rounded-r text-gray-700 py-2 px-3 bg-white focus:border-primary"/>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Use hyphens to separate words for better SEO</p>
                </div>
            </div>
        </div>
        {showAddDiscount && <AddDiscount onClose={()=>handleAddDiscount(false)}/>}
    </div>
  )
}

export default CoursePublish