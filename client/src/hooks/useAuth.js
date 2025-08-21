import {registerUser } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';
import useAuthStore from "../store/authStore";

export const useAuth = ()=>{
    //make api call for signup
    const signup = async (userData)=>{
        try{
            const response = await registerUser(userData);
            navigate('/login');
        } catch(err){
            toast.error(err.response?.data?.errors || err.response?.data?.message);
        }
    };
 
    return {signup};
}