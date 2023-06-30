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
  },
  {
    "propertyType": "Studio",
    "price": 4000,
    "description": "Cozy studio apartment with modern amenities. Welcome to Serene Studios located in the vibrant city of Nakuru, Kenya. This well-designed studio offers a comfortable living space with contemporary furnishings. Enjoy the convenience of a fully equipped kitchenette, a comfortable bed, and a stylish bathroom. Perfect for solo travelers or couples seeking a peaceful retreat. Experience urban living at an affordable price.",
    "propertyName": "Serene Studio in Nakuru",
    "location": "Nakuru, Kenya",
    "amenities": ["Wi-Fi", "Kitchenette", "TV"],
    "contactInfo": ["+254 712345678", "email@example.com"],
    "imageUrls": [
      "https://images.pexels.com/photos/6186827/pexels-photo-6186827.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  },
  {
    "propertyType": "1 Bedroom",
    "price": 8000,
    "description": "Charming 1-bedroom apartment in the heart of Eldoret. Welcome to Orchid Apartments, a cozy retreat in Eldoret, Kenya. This beautifully furnished 1-bedroom apartment offers a spacious living area, a fully equipped kitchen, and a comfortable bedroom with an en-suite bathroom. Enjoy the convenience of nearby restaurants, shopping centers, and parks. Experience comfort and convenience in this delightful apartment.",
    "propertyName": "Orchid Apartments in Eldoret",
    "location": "Eldoret, Kenya",
    "amenities": ["Parking", "Laundry", "Balcony"],
    "contactInfo": ["+254 789012345", "email@example.com"],
    "imageUrls": [
      "https://images.pexels.com/photos/6527062/pexels-photo-6527062.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  },
  {
    "propertyType": "2 Bedroom",
    "price": 12000,
    "description": "Modern 2-bedroom apartment with panoramic views in Kisumu. Welcome to Lakeside Residences, offering luxurious 2-bedroom apartments in Kisumu, Kenya. Enjoy the spacious living area, well-equipped kitchen, and comfortable bedrooms with en-suite bathrooms. Take in breathtaking views of Lake Victoria from your private balcony. Experience the ultimate blend of comfort and tranquility at Lakeside Residences.",
    "propertyName": "Lakeside Residences in Kisumu",
    "location": "Kisumu, Kenya",
    "amenities": ["Swimming Pool", "Fitness Center", "24/7 Security"],
    "contactInfo": ["+254 701234567", "email@example.com"],
    "imageUrls": [
      "https://images.pexels.com/photos/6444250/pexels-photo-6444250.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  },
  {
    "propertyType": "Villa",
    "price": 55000,
    "description": "Exquisite villa with a private pool in Malindi. Welcome to Paradise Villa, a luxurious retreat in the beautiful coastal town of Malindi, Kenya. This stunning villa features elegant interiors, spacious living areas, and a private pool surrounded by lush tropical gardens. Indulge in the ultimate relaxation and enjoy the tranquility of your own private oasis. Experience the epitome of luxury at Paradise Villa.",
    "propertyName": "Paradise Villa in Malindi",
    "location": "Malindi, Kenya",
    "amenities": ["Private Pool", "Garden", "BBQ Area"],
    "contactInfo": ["+254 710987654", "email@example.com"],
    "imageUrls": [
      "https://images.pexels.com/photos/6447377/pexels-photo-6447377.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  },
  {
    "propertyType": "Beach House",
    "price": 75000,
    "description": "Stunning beachfront house in Diani. Welcome to Ocean Breeze, a breathtaking beach house located in the idyllic coastal town of Diani, Kenya. This spacious beachfront property offers panoramic ocean views, direct beach access, and luxurious amenities. Relax in the private swimming pool, stroll along the pristine sandy beach, or simply unwind on the spacious terrace while enjoying the gentle sea breeze. Experience coastal living at its finest at Ocean Breeze.",
    "propertyName": "Ocean Breeze in Diani",
    "location": "Diani, Kenya",
    "amenities": ["Beachfront", "Private Pool", "Terrace"],
    "contactInfo": ["+254 712345678", "email@example.com"],
    "imageUrls": [
      "https://images.pexels.com/photos/6782338/pexels-photo-6782338.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
  },
  {
    "propertyType": "Farmhouse",
    "price": 60000,
    "description": "Idyllic farmhouse retreat in Nanyuki. Escape to Green Acres, a charming farmhouse nestled in the serene countryside of Nanyuki, Kenya. This picturesque retreat offers a tranquil environment, lush gardens, and panoramic views of Mount Kenya. Enjoy the rustic yet elegant interiors, cozy living spaces, and spacious outdoor areas perfect for relaxation or outdoor activities. Experience the beauty of nature at Green Acres.",
    "propertyName": "Green Acres in Nanyuki",
    "location": "Nanyuki, Kenya",
    "amenities": ["Gardens", "Scenic Views", "Fireplace"],
    "contactInfo": ["+254 789012345", "email@example.com"],
    "imageUrls": [
      "https://images.pexels.com/photos/6782338/pexels-photo-6782338.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
