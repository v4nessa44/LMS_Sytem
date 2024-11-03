import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {

    const onClickAllCourses = () => {
        
    }

    const onAddCourses = () => {
        
    }

    const onStudents = () => {
        
    }
  
    const onAnnoucements = () => {
        
    }
  return (
    <div className="container">
      <h1>Hi Teacher!</h1>
      <div className="feature-container">
      <FeatureCard title="All Courses" img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg" onClick={onClickAllCourses}/>
      <FeatureCard  title="Add Courses" img="https://learn.g2.com/hubfs/iStock-1066852584.jpg" onClick={onAddCourses}/>
      <FeatureCard title="Students" img="https://img.freepik.com/free-vector/set-smart-students-college_1262-19925.jpg" onClick={onStudents} />
      <FeatureCard title="Annoucements" img="https://img.freepik.com/premium-vector/cartoon-young-businessman-with-megaphone_70172-2312.jpg?w=360" onClick={onAnnoucements}/>
      </div>
      </div>
  );
};

export default TeacherDashboard;
