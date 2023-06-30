import React, {useState, useEffect} from 'react';
import styles from './PropertyListingCss.module.css';
import Modal from 'react-modal';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function PropertyListing ({listings}) {
const [selectedImage, setSelectedImage] = useState(null);
const [selectedImagePropertyName, setSelectedImagePropertyName] = useState('');
const [selectedImagePropertyType, setSelectedImagePropertyType] = useState('');
const [selectedImagePropertyPrice, setSelectedImagePropertyPrice] = useState('');
const [selectedImagePropertyContact, setSelectedImagePropertyContact] = useState('');
const [selectedImagePropertyUrl, setSelectedImagePropertyUrl] = useState('');
const [selectedImagePropertyAmenities, setselectedImagePropertyAmenities] = useState('');

const position = [51.505, -0.09];





const openModal = (image) => {

    setSelectedImage(image);

};


useEffect(() => {
    if (selectedImage) {    
      setSelectedImagePropertyName(selectedImage.propertyName);
    }
    if (selectedImage) {    
        setSelectedImagePropertyType(selectedImage.propertyType);
      }
      if (selectedImage) {    
        setSelectedImagePropertyContact(selectedImage.contactInfo);
      }
      if (selectedImage) {    
        setSelectedImagePropertyUrl(selectedImage.imageUrls);
      }
      if (selectedImage) {    
        setSelectedImagePropertyPrice(selectedImage.Price);
      }
      if(selectedImage){
        setselectedImagePropertyAmenities(selectedImage.amenities)
      }

      if(selectedImage) {
        setSelectedImagePropertyContact(selectedImage.contactInfo)
      }



      
  }, [selectedImage]);


console.log('console logging', selectedImage);




const closeModal = () => {
    setSelectedImage(null);
    
};

return (


<div className={styles.PropertyListingCss}>

{listings.map((listing) => (

<div key={listing.id} className={styles.listingCard}> 
<img src={listing.imageUrls} alt={listing.title} className={styles.listingImage}
onClick={() => openModal(listing)}
/>
<div className={styles.listingImagedescription}>
<h3>{listing.propertyType} </h3>
<p>{listing.propertyName} </p>
<div className={styles.listingImagedescriptioncity}>
 <p>{listing.location} </p>
<p> ksh {listing.price }</p> 
</div>

</div>
</div>


))}

<Modal
    isOpen = {selectedImage !==null}
    onRequestClose = {closeModal}
    contentLabel = "image Modal"
    className= {styles.Modal}
    >


{selectedImage && (
  <div className={styles.popup}>

    <div className={styles.Modalheader}>
        
     
        <p className={styles.Modalheadertitle}> {selectedImagePropertyName} </p>
        <img className={styles.UserImage} src={selectedImagePropertyUrl}/>

    </div>


    <div className={styles.Modalimages}>
        <img src={selectedImagePropertyUrl} alt={selectedImage.title} className={styles.imagepop1} />
        <div className={styles.imagepopgroup}>
        <img src={selectedImagePropertyUrl} alt={selectedImage.title} className={styles.imagepop2}/>
        <img src={selectedImagePropertyUrl} alt={selectedImage.title} className={styles.imagepop2} />
   </div>
    </div>
    
    <div className={styles.ModalDescription}>
        <div className={styles.ModalDescriptionbox}>
          <h3 className={styles.description}> Description </h3>
            <p>{selectedImage.description}</p>

            <h3>Amenities </h3>
            <p>{selectedImagePropertyAmenities[0]}</p>
            <p>{selectedImagePropertyAmenities[1]}</p>
            <p>{selectedImagePropertyAmenities[2]}</p>
            <p>{selectedImagePropertyAmenities[3]}</p>
            <p>{selectedImagePropertyAmenities[4]}</p>
            <p>{selectedImagePropertyAmenities[5]}</p>


            <h3>Price </h3>
          <p>${selectedImage.price} </p>
        </div>


    <div className={styles.ModalMap}>
      <p>Map</p>
           
            <MapContainer center={position} zoom={13} >
            <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution="Map data © OpenStreetMap contributors"
/>
      <Marker position={position} />
    </MapContainer>

                      
    </div>


    
    </div> 
    <div className={styles.ModalDescriptioncontact}> 
    <h3>Contact</h3>
            <p>Phone Number: {selectedImagePropertyContact[0]} </p>
            <p>Email: {selectedImagePropertyContact[1]} </p>
    </div>
    <div className={styles.ModalUsercomments}>
      <h3>What our users are saying...</h3>
        <p>
            User comment 1
        
        </p>
        <p>
        user comment 2
        </p>
        <p>
        user comment 3
        </p>
     
    </div>

  </div>
)}
</Modal>

</div>

    );
}

export default PropertyListing;