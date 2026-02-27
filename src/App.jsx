import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentDashboard from "./pages/StudentDashboard";
import ManageUsers from "./pages/ManageUsers";
import RoleManagement from "./pages/RoleManagement";
import PlatformAnalytics from "./pages/PlatformAnalytics";
import Reports from "./pages/Reports";
import MyCourses from "./pages/MyCourses";
import CourseViewer from "./pages/CourseViewer";
import SubmitAssignment from "./pages/SubmitAssignment";
import ViewGrades from "./pages/ViewGrades";
import ProgressTracking from "./pages/ProgressTracking";
import Notifications from "./pages/Notifications";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import InstructorDashboard from "./pages/InstructorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateCourse from "./pages/CreateCourse";
import ManageCourses from "./pages/ManageCourses";
import UploadMaterials from "./pages/UploadMaterials";
import GradeAssignments from "./pages/GradeAssignments";
import ViewEnrollments from "./pages/ViewEnrollments";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
<Route path="/instructor-dashboard" element={<InstructorDashboard />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
<Route path="/manage-users" element={<ManageUsers />} />
<Route path="/role-management" element={<RoleManagement />} />
<Route path="/platform-analytics" element={<PlatformAnalytics />} />
<Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
<Route path="/create-course" element={<CreateCourse />} />
<Route path="/manage-courses" element={<ManageCourses />} />
<Route path="/upload-materials" element={<UploadMaterials />} />
<Route path="/grade-assignments" element={<GradeAssignments />} />
<Route path="/view-enrollments" element={<ViewEnrollments />} />
<Route path="/my-courses" element={<MyCourses />} />
<Route path="/course-viewer/:id" element={<CourseViewer />} />
<Route path="/submit-assignment/:id" element={<SubmitAssignment />} />
<Route path="/grades" element={<ViewGrades />} />
<Route path="/progress" element={<ProgressTracking />} />
<Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
}

export default App;