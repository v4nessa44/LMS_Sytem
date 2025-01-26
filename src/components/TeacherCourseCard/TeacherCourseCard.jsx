import React from "react";
import "./TeacherCourseCard.css";
import { Rate } from "antd";


const TeacherCourseCard = (props) => {


    return (
        <div className="TeacherCourseCard">
            <div className="teacher">

                <div className="profile-container">
                    <img src={props.img} />
                </div>
                <div className="profile-info">
                    <h1>{props.title}</h1>


                 
                        
                        <div className="enrollment">
                            <h4>Enrolled Sudent: <span></span></h4>
                        </div>
                       
                 

                    <div className="teacher-btn">
                            <button className="edit-btn">Edit </button>
                      
                            <button className="deleted-btn">Delete </button>
                        </div>
                </div>

                <div class="card-bottom"></div>
            </div>
        </div>
    );
};

export default TeacherCourseCard;
