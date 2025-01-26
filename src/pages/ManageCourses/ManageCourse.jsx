import React from 'react'



import Pagination from "../../components/Pagination/pagination";

import "./ManageCourse.css"
import TeacherCourseCard from '../../components/TeacherCourseCard/TeachercourseCard';



const ManageCourse = () => {
  
    return (
        <div className="course-container">
          <h1>Manage Courses</h1>
         
    
          <div className="TeacherCourses">
            <TeacherCourseCard
          
              title="All Courses"
            img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
           
            />
    
            <TeacherCourseCard
              title="All Courses"
              img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
            />
    
            <TeacherCourseCard
              title="All Courses"
              img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
            />
    
            <TeacherCourseCard
              title="All Courses"
              img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
            />
    
            <TeacherCourseCard
              title="All Courses"
              img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
            />
    
            <TeacherCourseCard
              title="All Courses"
              img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
            />
    
            <TeacherCourseCard
              title="All Courses"
              img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
            />
          </div>
          <Pagination totalPages={30} />
        </div>
      );
    };
  

export default ManageCourse