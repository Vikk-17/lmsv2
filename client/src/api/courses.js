import { axiosClient } from "./axiosClient";

export const fetchCourses = async ({page,limit})=>{
    const res = await axiosClient.get('/courses',{params: {page,limit}});
    return res.data;
}

export const fetchCategory = async () =>{
    const res = await axiosClient.get('/category');
    return res.data;
}

export const fetchCourseByID = async (id)=>{
    const res = await axiosClient.get(`/courses/${id}`);
    return res.data;
}