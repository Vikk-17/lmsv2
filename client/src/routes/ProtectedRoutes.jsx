import { Navigate,Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function ProtectedRoutes({roles, children}) {
    const {user} = useAuthStore();
    if(!user) return <Navigate to="/login" replace/>;
    if(roles && !roles.includes(user.role)) return <Navigate to="/unauthorized" replace />
    return <Outlet/>;
}

export default ProtectedRoutes