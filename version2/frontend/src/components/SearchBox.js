import React, { useState } from 'react';
import './SearchBox.css';

// The SearchBox component receives props: searchQuery, setSearchQuery, handleSearch
function SearchBox({ searchQuery, setSearchQuery, handleSearch }) {

  // This function is called when the input value changes
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    handleSearch(searchQuery); // Calls handleSearch with the current searchQuery value
  };

  // This function is called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from being submitted and refreshing the page
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="  Discover your perfect oasis! Start typing and let the magic happen...."
          className="search-bar"
          value={searchQuery} // Binds the input value to the searchQuery prop
          onChange={handleInputChange} // Calls handleInputChange on input change
        />
      </form>
    </div>
  );
}

export default SearchBox;
