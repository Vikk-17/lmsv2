import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { patchCourse, postCourse,postModule,postVideos,uploadVideo } from "../api/courses";
import toast from "react-hot-toast";
import { initialState } from "../data/intialState";
const useCourseStore = create(
  persist(
    (set, get) => ({
      courseId:"",
      error:'',
      isCoursePublished:false,
      moduleCount:1,
      isCourseCreated:false,
      courseInfo: {
        title: "",
        description: "",
        category: "",
        skillLevel: "beginner", // default
        instructor: "",   
      },
      componentCount:1,
      modules: [], // store ObjectIds (string)
      moduleInfo: [],
      videos:[],
      uploadQueue:[],
      videosInfo: {},
      pricing: {
        price: null,
        currency: "inr",
        discount: [],
        isFree: false,
        saleEndsAt: null,
      },
      lifecycle: {
        visibility: "public",
        limit:null,
        status: "draft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      metadata: {
        metaDesc: "",
        keyword: [],
        slug: "",
        thumbnailUrl: "",
        previewVideoUrl: "",
      },
      metrics: {
        enrollments: 0,
        avgRating: 0,
        ratingCount: 0,
        totalVideos: 0,
        totalQuizzes: 0,
        readTimeMinutes: 0,
      },

      // Actions
    updateCourseInfo: (data) =>
      set((state) => ({
        courseInfo: { ...state?.courseInfo, ...data },
      })),

    updateLifecycle: (data) =>
      set((state) => ({
        lifecycle: { ...state?.lifecycle, ...data },
      })),
    
    updateMetadata: (data) =>
      set((state) => ({
        metadata: { ...state?.metadata, ...data },
      })),

    updatePricing: (data) =>
      set((state) => ({
        pricing: { ...state?.pricing, ...data },
      })),

    addDiscount:(data)=>
      set((state)=>({
        pricing:{...state?.pricing,discount:[...state.pricing.discount,data]},
      })),

    addKeyword:(data)=>
      set((state)=>({
        metadata:{...state?.metadata,keyword:[...data]}
      })),

    setComponentCount:(cb)=>set((state)=>({
      componentCount:cb(state?.componentCount)
    })),

    addModuleInfo :(newModule)=>
      set((state)=>({
        moduleInfo:[...state?.moduleInfo,newModule],
    })),

    updateModuleCount: ()=>
      set((state)=>({moduleCount:state?.moduleCount+1}  
    )),

    addModules:(mid)=>
      set((state)=>({
        modules:[...state?.modules, mid],
    })),

    deleteModule: (mid) =>
      set((state) => ({
        modules: state.modules.filter((m) => m !== mid),
    })),
  
    addVideos:(vid)=>
      set((state)=>({
        videos:[...state?.videos,vid],
      })),

    enqueue: (task) => set((state) => ({
        uploadQueue: [...state.uploadQueue, task]   // add to end
      })),

      dequeue: () => {
        const state = get();
        if (state.uploadQueue.length === 0) return null;

        const [first, ...rest] = state.uploadQueue;
        set({ uploadQueue: rest });
        return first;
      },
      peek: () => get().uploadQueue[0] || null,
      addVideosInfo: (mid, mtitle, vdata) =>
        set((state) => {
        const prev = state.videosInfo[mid] || { title: mtitle, videos: [] };
        return {
          videosInfo: {
          ...state.videosInfo,
          [mid]: {
          ...prev,
          title: mtitle,
          videos: [...prev.videos, ...vdata],
          },
          },
      };
    }),

    removeVideosInfo: (mid) =>
      set((state) => {
        const newVideosInfo = { ...state.videosInfo };
        delete newVideosInfo[mid];
        return { videosInfo: newVideosInfo };
    }),

      removeVideo: (mid, vidId) =>
        set((state) => {
          const updated = { ...state.videosInfo };
          if (updated[mid]) {
            updated[mid] = {
              ...updated[mid],
              videos: updated[mid].videos.filter((v) => v._id !== vidId),
            };
          }
          return { videosInfo: updated };
        }),

        updateVideo: (mid, vidId, updatedData) =>
          set((state) => {
            const updated = { ...state.videosInfo };

            if (updated[mid]) {
              updated[mid] = {
                ...updated[mid],
                videos: updated[mid].videos.map((video) =>
                  video._id === vidId ? { ...video, ...updatedData } : video
                ),
              };
            }

            return { videosInfo: updated };
          }),

      updatePricing: (data) =>
        set((state) => ({
          pricing: { ...state.pricing, ...data },
        })),

      updateLifecycle: (data) =>
        set((state) => ({
          lifecycle: { ...state.lifecycle, ...data },
        })),

      updateMetadata: (data) =>
        set((state) => ({
          metadata: { ...state.metadata, ...data },
        })),

      getCourseData:()=>{
          const { addModule,courseId,updateCourseInfo,isCourseCreated,updateQuizzes,updateAssignments,updateModules,setInstructor,updateMetadata,updateLifecycle,createCourse, updateCourse,updatePricing, ...courseData } = get();
          return courseData;
      },
      createCourse: async () => {
        try {
          const {getCourseData} = get();
          const courseData = getCourseData();
          const res = await postCourse(courseData);
          if(res?._id){
            set({courseId:res._id, isCourseCreated:true});
            return 1;
          }
          throw new Error("course creation failed");
        } catch (err) {
          toast.error(err.message || "course creation failed");
          return null;
        }
      },
      createModule: async (data,cid)=>{
        // set({isLoading:true,error:''});
        try{
          const {addModules,modules} = get();
          const res = await postModule(data,cid);
          if(res?._id){
            addModules(res?._id);
            return res?._id;
          }
          throw new Error("module creation failed")
        } catch(err){
          set({isLoading:false, error:err.message|| `something went wrong`});
          toast.error(err.message || "Something went wrong ❌");
          return null;
        }
      },
      createVideo: async (vdata, mid) => {
        try {
            const { courseId, addVideosInfo, moduleInfo,enqueue } = get();
            const {videoInfo,file} = vdata;
            const data = await postVideos(videoInfo, courseId, mid);
            if(data?._id){
              const moduleObj = moduleInfo.find((m) => m.mid === mid);
              const title = moduleObj ? moduleObj.title : "Untitled Module";
              addVideosInfo(mid, title, [data]);
              enqueue({...data,file}); 
              return 1;
            }
           throw new Error("video creation failed");
        } catch (err) {
            toast.error(err.message || "video creation failed");
            return null;
        }
      },
      updateCourse: async ()=>{
        try{
          const {courseId,pricing,lifecycle,metadata,metrics,modules} = get();
          const data = {pricing,modules,lifecycle,metadata,metrics};
          const res = await patchCourse(courseId,data);
          if (res?.status === 200) return false;
          throw new Error("updation failed");
        } catch(err){
          return true;
        }
      },
      uploadVid: async (data)=>{
        console.log(data);
        try{
          const res = await uploadVideo(data);
          console.log(res);
        } catch(err){
          console.log(err);
        }
      },
      resetCourseStore: () => {
        sessionStorage.removeItem("course-storage");
        set(initialState); 
      },
    }),
    {
      name: "course-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCourseStore;
