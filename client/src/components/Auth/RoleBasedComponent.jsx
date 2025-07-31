import StudentDash from "../../pages/StudentDash";
import InstructorDash from "../../pages/InstructorDash";
import useAuthStore from "../../store/authStore";
import InstructorMyCourses from "../../pages/InstructorMyCourses";
import StudentMyCourses from "../../pages/StudentMyCourses";


export const RoleBasedDashboard = () => {
    const {user} = useAuthStore();
    if (user?.role === "student") return <StudentDash />;
    if (user?.role === "instructor") return <InstructorDash />;
    return <div>Unauthorized</div>;
};

export const RoleBasedMycourses = ()=>{
    const {user} = useAuthStore();
    if(user?.role === 'student') return <StudentMyCourses/>;
    if(user?.role === 'instructor') return <InstructorMyCourses/>;
    return <div>Unauthorized</div>;
};