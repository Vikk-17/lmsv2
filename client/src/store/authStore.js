import { create } from "zustand";
import {persist} from "zustand/middleware";
import { loginUser } from "../api/auth";

const useAuthStore = create(persist((set)=>({
    user: null,
    isAuthenticated:false,
    loading:false,
    error:null,
    login: async (credentials)=>{
        set({loading:true,error:null});
        try{
            const res = await loginUser(credentials);
            set({user:res.data,isAuthenticated:true,loading:false});
            console.log('user login');
        }catch(err){
            set({error:err.message,loading: false});
        }
    },
    }),
    {
        name: 'auth-storage',
        partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
));

export default useAuthStore;