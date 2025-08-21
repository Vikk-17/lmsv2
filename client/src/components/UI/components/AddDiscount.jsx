import {useEffect, useState} from 'react';
import useCourseStore from '../../../store/courseStore';

function AddDiscount({onClose}) {
    const [discountData,setDiscountData] = useState({dtype:'',amount:'',valadity:''});
    const {addDiscount} = useCourseStore();
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        };

    }, []);
    const handleDicount = (e)=>{
        const {name,value} = e.target;
        setDiscountData((prev)=>({...prev,[name]:value}));
    }
    const createDiscount = (e)=>{
        e.preventDefault;
        addDiscount(discountData);
        onClose();
    }
  return (
    <div className="bg-gray-900/30  backdrop-blur-xs fixed  inset-0  z-20  ">
        <div className="bg-white max-w-5xl mx-auto mt-47 rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-[var(--clr-accent-900)]">
                <h3 className="text-lg font-medium text-white">Create  Discount</h3>
            </div>
            <div className="p-6">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div>
                            <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-1">Discount type</label>
                            <input name='dtype' value={discountData?.dtype} onChange={handleDicount} id="points" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="enter discount type" />
                        </div>
                        <div>
                            <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                            <input name='amount' value={discountData?.amount} onChange={handleDicount} type="number" id="points" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="10%" min="1"/>
                        </div>
                        <div>
                            <label htmlFor="due-date" className="block text-sm font-medium text-gray-700 mb-1">Validity</label>
                            <input name='valadity' value={discountData?.valadity} onChange={handleDicount} type="date" id="due-date" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"/>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        </div>
                        <div className="flex space-x-3">
                            <button onClick={onClose} type="button" id="cancel-assignment-btn" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button bg-white text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                                Cancel
                            </button>
                            <button type="button" onClick={createDiscount} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium !rounded-button bg-[var(--clr-accent-900)] text-white hover:bg-[var(--clr-accent-1000)] focus:outline-none whitespace-nowrap">
                                Add Discount
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDiscount