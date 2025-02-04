import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import EnrollmentRequests from "./pages/EnrollmentRequest/EnrollmentRequests";
import PrivacyPolicy from "./pages/HomePage/privacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import StudentRequest from "./pages/StudentRequest/StudentRequest";
import FeedbackForm from "./pages/FeedbackForm/FeedbackForm";
import CourseCompletion from "./pages/CourseCompletion/CourseCompletion";
import CertificationCompletion from "./pages/Certification/CertificationCompletion";
import ManageCourse from "./pages/ManageCourses/ManageCourse";
import ManagedStudents from "./pages/ManagedStudents/ManagedStudents";

function App() {
  const path = useLocation();

  console.log(path);
  return (
    <>
      <div className="content">
        {path.pathname !== "/" && <NavBar />}
        <Routes>
          {/* Developed Ones */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/enrollment-request" element={<EnrollmentRequests />} />
          <Route path="/course-detail/:id" element={<CourseDetails />} />
          <Route path="/student-request" element={<StudentRequest />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
          <Route path="/course-completion" element={<CourseCompletion />} />
          <Route path="/certification-completion" element={<CertificationCompletion />} />
          <Route path="/teacher/courses" element={<ManageCourse />} />
          <Route path="/managed-students" element={<ManagedStudents/> } />
         
          
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      {path.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
