import React from "react";
import "./CourseCard.css";
import { Rate } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useState } from "react";

const CourseCard = (props) => {
  const [isStarred, setIsStarred] = useState(false);
  const handleStarClick = () => { 
    setIsStarred(!isStarred);
  };
  return (
    <div className="courseCard">
      <div className="courses">
        <div className="star-container" onClick={handleStarClick}>
          {isStarred ? (
            <StarFilled className="star-icon" />
          ) : (
            <StarOutlined className="star-icon" />
          )}
        </div>
        <div className="profile-container">
          <img src={props.img} />
        </div>
        <div className="profile-info">
          <h1>{props.title}</h1>
          <div className="author">
            <h5>Vanessa</h5>
          </div>

          <div className="bottom-info">
            <p className="price">$19</p>
            <div className="review">
              <span>
                <Rate disabled defaultValue={2} style={{ fontSize: "18px" }} />
              </span>
              <span>(1000+ students)</span>
            </div>
          </div>
        </div>

        <div class="card-bottom"></div>
      </div>
    </div>
  );
};

export default CourseCard;
