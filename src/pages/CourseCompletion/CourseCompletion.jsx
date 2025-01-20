import React from "react";
import "./CourseCompletion.css";


const CourseCompletion = () => {
    return <div className="completion-container">
        <div className="icon">🎉</div>
        <h1>Congratulations!</h1>
        <p>You have successfully completed the course.</p>
        <a href="#" className="btn">View Certificate</a>
    </div>;
};

export default CourseCompletion;
