import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup/Signup";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Auth/Login/Login";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import Courses from "./pages/Courses/Courses";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import AllCourses from "./pages/AllCourses/AllCourses";
import CourseCard from "./components/CourseCard/CourseCard";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Foorter";

function App() {
  return (
    <>
      <div className="content">
        <NavBar />
        <Routes>

          {/* Developed Ones */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/coursecard" element={<CourseCard />} />
          <Route path="/allcourses" element={<AllCourses />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/teacher/courses" element={<AllCourses />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
