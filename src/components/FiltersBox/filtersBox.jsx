import React from "react";
import "./filterBox.css";

const FiltersBox = ({ isFilterModalOpen, toggleFilterModal }) => {
  // Handle overlay click
  const handleOverlayClick = (e) => {
    // Close the modal only if the user clicks on the overlay, not the modal content
    if (e.target.classList.contains("filter-modal")) {
      toggleFilterModal();
    }
  };

  return (
    <>
      {isFilterModalOpen && (
        <div className="filter-modal" onClick={handleOverlayClick}>
          <div className="filter-modal-content">
            <h2>Filter Options</h2>

            {/* Subject Filter */}
            <div className="filter-group">
              <label htmlFor="subject">Subject:</label>
              <select id="subject" name="subject">
                <option value="all">All Subjects</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="art">Art</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div className="filter-group">
              <label htmlFor="rating">Rating:</label>
              <select id="rating" name="rating">
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars & Above</option>
                <option value="3">3 Stars & Above</option>
              </select>
            </div>

            {/* Instructor Filter */}
            <div className="filter-group">
              <label htmlFor="instructor">Instructor:</label>
              <select id="instructor" name="instructor">
                <option value="all">All Instructors</option>
                <option value="john_doe">John Doe</option>
                <option value="jane_smith">Jane Smith</option>
                <option value="mark_taylor">Mark Taylor</option>
              </select>
            </div>

            {/* Modal Actions */}
            <div className="filter-actions">
              <button onClick={toggleFilterModal}>Apply Filters</button>
              <button onClick={toggleFilterModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersBox;
