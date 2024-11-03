import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";




const AllCourses = () => {
  return (
    <div className="course-container">
      <h1>All Courses</h1>
      <input type="search" placeholder="Search for courses" />
      <div className="courses">
        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />
       
      </div>
    </div>
  );
};

export default AllCourses;
