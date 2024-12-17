import React, { useState } from "react";
import FiltersBox from "../../../components/FiltersBox/filtersBox";
import "./HeaderControls.css";

const HeaderControls = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Toggle Modal Visibility
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  return (
    <div className="header-controls">
      {/* Search Input */}
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="search"
          placeholder="Search for courses"
          className="search-input"
        />
      </div>

      {/* Filter Button */}
      <button className="filter-button" onClick={toggleFilterModal}>
        <i className="fa-solid fa-sliders"></i>
      </button>

      {/* Dropdown */}
      <select id="dropdown" name="options" className="dropdown">
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <FiltersBox
        isFilterModalOpen={isFilterModalOpen}
        toggleFilterModal={toggleFilterModal}
      />
    </div>
  );
};

export default HeaderControls;
