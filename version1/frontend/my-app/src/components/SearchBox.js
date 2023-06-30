import React, {useState} from 'react';
import './SearchBox.css';


function SearchBox ({ searchQuery, setSearchQuery, handleSearch }) {

const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    handleSearch(searchQuery);

};

const handleSubmit =(event)=> { 
    event.preventDefault();
    
};

    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder = "    Discover your perfect oasis! Start typing and let the magic happen...." 
            className="search-bar"
            value={searchQuery}
            onChange={handleInputChange}
            
            /> 
            
        </form>
        </div>
        
        );
}

export default SearchBox;