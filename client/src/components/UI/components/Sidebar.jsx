import logo from '../../../assets/gir-logo.svg'
import { Link } from 'react-router-dom'
import useAuthStore from '../../../store/authStore';
import { studentNav,instructorNav } from '../../../data/navData';
import { useEffect, useState } from 'react';

function Sidebar() {
    const {user} = useAuthStore();
    const [navList,setnavList] = useState({});
    useEffect(()=>{
        switch(user?.role){
            case 'student':
            setnavList(studentNav);
            break;
            case 'instructor':
            setnavList(instructorNav);
            break;
        }
    },[user])
    return (
        <aside className="fixed h-screen w-64 bg-white border-r border-gray-200 z-10 shadow-sm">
                <div className="py-3.5 border-b border-gray-200">
                    <div className="flex items-center justify-center">
                        <Link  to="/dashboard"><img  src={logo} alt="" /></Link>
                    </div>
                </div>
                
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                            <img src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20teacher%20with%20glasses%2C%20friendly%20smile%2C%20high%20quality%20professional%20photo%2C%20clean%20background&width=100&height=100&seq=1&orientation=squarish" alt="Profile" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h6 className="font-medium text-gray-900">David Mitchell</h6>
                            <p className="text-xs text-gray-500">Web Development Instructor</p>
                        </div>
                    </div>
                </div>
                
                <nav className="p-2">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">Main</div>
                    {navList?.main?.map((nav,idx)=>(
                        <Link  to={`/${nav?.slug}`} className="sidebar-link active flex items-center px-3 py-2 text-gray-700 rounded-md mb-1">
                            <div className="w-5 h-5 flex items-center justify-center mr-3">
                                <i className={nav?.icon}></i>
                            </div>
                            <span>{nav?.name}</span>
                        </Link>
                    ))}
                    
                    
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 mt-6">Settings</div>
                    {navList?.setting?.map((nav,idx)=>(
                        <Link  to={`/${nav?.slug}`} className="sidebar-link active flex items-center px-3 py-2 text-gray-700 rounded-md mb-1">
                            <div className="w-5 h-5 flex items-center justify-center mr-3">
                                <i className={nav?.icon}></i>
                            </div>
                            <span>{nav?.name}</span>
                        </Link>
                    ))}
                    
                </nav>
                
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
                    <a href="#" className="flex items-center text-gray-700">
                        <div className="w-5 h-5 flex items-center justify-center mr-3">
                            <i className="ri-logout-box-line"></i>
                        </div>
                        <span>Logout</span>
                    </a>
                </div>
        </aside>
    )
}

export default Sidebar