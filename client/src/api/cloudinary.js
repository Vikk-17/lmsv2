import axios from "axios";
import { axiosClient } from "./axiosClient";

export const uploadVideos = async ()=>{
    const res = await axiosClient.post('/video/upload');
}

export const uploadImage = async ()=>{
    const res = await axiosClient.post('/video/upload/image');
}