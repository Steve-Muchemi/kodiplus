import React, {useState, useEffect} from 'react';
import styles from './PropertyListingCss.module.css';
import Modal from 'react-modal';
//import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function PropertyListing ({listings}) {
const [selectedImage, setSelectedImage] = useState(null);
const [selectedImagePropertyName, setSelectedImagePropertyName] = useState('');
const [selectedImagePropertyType, setSelectedImagePropertyType] = useState('');
const [selectedImagePropertyPrice, setSelectedImagePropertyPrice] = useState('');
const [selectedImagePropertyContact, setSelectedImagePropertyContact] = useState('');
const [selectedImagePropertyUrl, setSelectedImagePropertyUrl] = useState('');



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
<h3>{listing.propertyType} </h3>
<h3>{listing.propertyName} </h3>
<h3>{listing.location} </h3>
<h3>{listing.title} </h3>
<p> {listing.description} </p>
<p> ${listing.price}</p>
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

            <h3>{selectedImagePropertyType} here</h3>
            <p>{selectedImage.description}</p>
            <p>${selectedImage.price} </p>

        </div>
        <div className={styles.ModalMap}>
            <img src={selectedImage.image}/>
            <p>Map will be shown here</p>

                      
            </div>


    
    </div> 
    <div className={styles.ModalDescriptioncontact}> 
            <p>Phone Number: 071823332 should be </p>
            <p>Email: bestretnals@gmail.com </p>
    </div>
    <div className={styles.ModalUsercomments}>
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