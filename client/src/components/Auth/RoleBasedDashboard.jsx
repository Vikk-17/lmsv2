import StudentDash from "../../pages/StudentDash";
import InstructorDash from "../../pages/InstructorDash";
import useAuthStore from "../../store/authStore";

const RoleBasedDashboard = () => {
    const {user} = useAuthStore();
    if (user.role === "student") return <StudentDash />;
    if (user.role === "instructor") return <InstructorDash />;
    return <div>Unauthorized</div>;
};

export default RoleBasedDashboard;
