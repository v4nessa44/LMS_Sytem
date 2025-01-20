import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    courseId: "",
    instructor: "",
    courseRating: 0,
    instructorRating: 0,
    contentQuality: 0,
    feedback: "",
    wouldRecommend: false
  });

  const handleRatingChange = (field, rating) => {
    setFormData(prev => ({
      ...prev,
      [field]: rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement submission logic
    console.log(formData);
  };

  const renderStars = (field, value) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star-btn ${star <= value ? 'active' : 'inactive'}`}
            onClick={() => handleRatingChange(field, star)}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h1>Course Feedback</h1>
        <p>Help us improve by sharing your experience</p>
      </div>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Course</label>
          <select
            value={formData.courseId}
            onChange={(e) => setFormData(prev => ({...prev, courseId: e.target.value}))}
            required
          >
            <option value="">Select a course</option>
            <option value="1">Web Development</option>
            <option value="2">Data Structures</option>
            <option value="3">Machine Learning</option>
          </select>
        </div>

        <div className="form-group">
          <label>Course Rating</label>
          <div className="rating-group">
            {renderStars('courseRating', formData.courseRating)}
          </div>
        </div>

        <div className="form-group">
          <label>Instructor Rating</label>
          <div className="rating-group">
            {renderStars('instructorRating', formData.instructorRating)}
          </div>
        </div>

        <div className="form-group">
          <label>Content Quality</label>
          <div className="rating-group">
            {renderStars('contentQuality', formData.contentQuality)}
          </div>
        </div>

        <div className="form-group">
          <label>Detailed Feedback</label>
          <textarea
            value={formData.feedback}
            onChange={(e) => setFormData(prev => ({...prev, feedback: e.target.value}))}
            placeholder="Share your thoughts about the course..."
            required
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="recommend"
            checked={formData.wouldRecommend}
            onChange={(e) => setFormData(prev => ({...prev, wouldRecommend: e.target.checked}))}
          />
          <label htmlFor="recommend">I would recommend this course to others</label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
