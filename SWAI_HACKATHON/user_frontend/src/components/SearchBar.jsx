import React from "react";
import "./SearchBar.css";
import searchIcon from "../assets/searchbar.png";
const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      <input
        type="text"
        placeholder="검색하기"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
