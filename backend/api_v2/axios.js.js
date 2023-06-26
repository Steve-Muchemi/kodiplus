const axios = require('axios');

const postData = [
  
    {
        "propertyType": "Apartment",
        "price": 35000,
        "description": "Luxury apartment with stunning city views",
        "propertyName": "Luxury Apartment 1",
        "location": "City, Kenya",
        "amenities": ["Gym", "Concierge", "Balcony"],
        "contactInfo": ["987-654-3210", "email@example.com"],
        "imageUrls": [
          "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
      },
      {
        "propertyType": "House",
        "price": 45000,
        "description": "Spacious house with a large backyard",
        "propertyName": "Cozy House",
        "location": "City 2, Kenya",
        "amenities": ["Swimming Pool", "Garden", "Garage"],
        "contactInfo": ["123-456-7890", "email@example.com"],
        "imageUrls": [
          "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ]
      }
];

axios.post('http://localhost:3001/api/properties', postData)
  .then(response => {
    console.log('Post request successful');
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error making Post request:', error);
  });
