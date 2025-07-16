import { create } from "zustand";
import { persist } from "zustand/middleware";

const localStorageWrapper = {
    getItem: (name) => localStorage.getItem(name),
    setItem: (name, value) => localStorage.setItem(name, value),
    removeItem: (name) => localStorage.removeItem(name),
};


const useCartStore = create(
    persist(
        (set)=>({
            item:0,
            addToCart: ()=>set((state)=>({item:state.item+1}))
        }),
        {
            name: 'cart-store',
            storage: {
                getItem: (name) => {
                const value = localStorage.getItem(name);
                return value ? JSON.parse(value) : null;
                },
                setItem: (name, value) => {
                localStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name) => {
                localStorage.removeItem(name);
                },
            }
        }
    )
);

export default useCartStore;