import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import PropertyListing from './components/PropertyListing';
import styles from './components/Footer.module.css';
import axios from 'axios';
import Bar from './components/bar'

function App() {

  // State variables
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchListings, setSearchListings] = useState([]);

  // Fetch listings data from API on component mount
  useEffect(() => {
    axios.get('/api/properties')
      .then(response => {
        const dbData = response.data;
        setListings(dbData);
        setSearchListings(dbData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle search query and filter listings accordingly
  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`/api/properties/${searchQuery}`);
      const filteredListings = response.data;
      setSearchListings(filteredListings);

      if (searchQuery) {
        console.log('current query', searchQuery);
      } else {
        setSearchListings(listings);
        console.log('going back to original data', searchQuery);
      }
    } catch (error) {
      console.error('Error searching listings:', error);
    }
  };

  // JSX
  return (
    <div>
      <Header />

      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <Bar />

      <PropertyListing listings={searchListings.length > 0 ? searchListings : listings} />

      <Footer />
    </div>
  );
}

export default App;
