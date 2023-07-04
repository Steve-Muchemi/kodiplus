import React, { useState } from 'react';
import {useEffect} from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import PropertyListing from './components/PropertyListing';
import styles from './components/Footer.module.css';
import axios from 'axios';
import Bar from './components/bar'



function App() {

const [listings, setlistings] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [searchListings, setSearchListings] = useState([]);

useEffect(() => {
    axios.get('/api/properties')
        .then(response => {
         const dbData = response.data;
         setlistings(dbData)
         setSearchListings(dbData)
 
        })
         .catch(error => {
          console.error('Error fetching data:', error);
     });
         }, []);
    


const handleSearch = async(searchQuery) => {
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
} catch(error) {
    console.error('Error search listings:', error);
}
};


<PropertyListing listings={searchListings.length > 0 ? searchListings : listings} />


useEffect(() =>{
function handleScroll() {
    console.log('scrolled');
    const footer = document.querySelector(`.${styles.footer}`);
    const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if(isScrolledToBottom) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

window.addEventListener('scroll', handleScroll);



return () => {
    window.removeEventListener('scroll', handleScroll);
};

}, []);



return (



<div>
<Header/>

<SearchBox
 searchQuery={searchQuery}
 setSearchQuery={setSearchQuery}
 handleSearch={handleSearch}
/>
<Bar/>
<PropertyListing listings={searchListings}/>
<Footer/>

</div>

);

}

export default App;