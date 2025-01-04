import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import HeaderControls from "./HeaderControls/HeaderControls";
import "./AllCourses.css";
import Pagination from "../../components/Pagination/pagination";

const AllCourses = () => {
  return (
    <div className="course-container">
      <h1>All Courses</h1>
      <HeaderControls />

      <div className="courses">
        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />

        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />

        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />

        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />

        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />

        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />

        <CourseCard
          title="All Courses"
          img="https://static.vecteezy.com/system/resources/previews/005/607/204/non_2x/teacher-connects-online-and-streams-her-video-courses-on-the-web-platform-flat-style-cartoon-illustration-free-vector.jpg"
        />
      </div>
      <Pagination totalPages={30} />
    </div>
  );
};

export default AllCourses;
