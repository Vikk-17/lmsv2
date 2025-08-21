import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  RoleBasedDashboard,
  RoleBasedMycourses,
} from "../components/Auth/RoleBasedComponent";
import Profile from "../pages/Profile";
import Watch from "../pages/Watch";
import CreateCourse from "../pages/CreateCourse";
import PageNotFound from "../pages/PageNotFound";
import Unauthorized from "../pages/Unauthorized";

function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes roles={["student", "instructor"]} />}>
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<RoleBasedDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mycourses" element={<RoleBasedMycourses />} />

          <Route element={<ProtectedRoutes roles={["student"]} />}>
            <Route path="watch" element={<Watch />} />
          </Route>

          <Route element={<ProtectedRoutes roles={["instructor"]} />}>
            <Route path="create-course" element={<CreateCourse />} />
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
