import React, { useState, useEffect } from 'react';
import styles from './PropertyListingCss.module.css';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function PropertyListing({ listings }) {
  // State variables for managing selected image and its details
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
    // Update the selected image details when the selectedImage state changes
    if (selectedImage) {
      setSelectedImagePropertyName(selectedImage.propertyName);
      setSelectedImagePropertyType(selectedImage.propertyType);
      setSelectedImagePropertyContact(selectedImage.contactInfo);
      setSelectedImagePropertyUrl(selectedImage.imageUrls);
      setSelectedImagePropertyPrice(selectedImage.Price);
      setselectedImagePropertyAmenities(selectedImage.amenities);
      setSelectedImagePropertyContact(selectedImage.contactInfo);
    }
  }, [selectedImage]);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.PropertyListingCss}>
      {/* Render the property listings */}
      {listings.map((listing) => (
        <div key={listing.id} className={styles.listingCard}>
          <img
            src={listing.imageUrls}
            alt={listing.title}
            className={styles.listingImage}
            onClick={() => openModal(listing)}
          />
          <div className={styles.listingImagedescription}>
            <h3>{listing.propertyType}</h3>
            <p>{listing.propertyName}</p>
            <div className={styles.listingImagedescriptioncity}>
              <p>{listing.location}</p>
              <p>ksh {listing.price}</p>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="image Modal"
        className={styles.Modal}
      >
        {selectedImage && (
          <div className={styles.popup}>
            <div className={styles.Modalheader}>
              <p className={styles.Modalheadertitle}>{selectedImagePropertyName}</p>
              <img className={styles.UserImage} src={selectedImagePropertyUrl} />
              <button className={styles.closeselected} onClick= {closeModal}> close </button>
            </div>

            // modal to handle the images
            <Imageapp selected = {selectedImagePropertyUrl} />


            {/* <div className={styles.Modalimages}>
              <img src={selectedImagePropertyUrl} alt={selectedImage.title} className={styles.imagepop1} />
              <div className={styles.imagepopgroup}>
                <img src={selectedImagePropertyUrl} alt={selectedImage.title} className={styles.imagepop2} />
                <img src={selectedImagePropertyUrl} alt={selectedImage.title} className={styles.imagepop2} />
              </div>
            </div>
             */}
            <div className={styles.ModalDescription}>
              <div className={styles.ModalDescriptionbox}>
                <h3 className={styles.description}>Description</h3>
                <p>{selectedImage.description}</p>
                <h3>Amenities</h3>
                {/* Render selected image's amenities */}
                <p>{selectedImagePropertyAmenities[0]}</p>
                <p>{selectedImagePropertyAmenities[1]}</p>
                <p>{selectedImagePropertyAmenities[2]}</p>
                <p>{selectedImagePropertyAmenities[3]}</p>
                <p>{selectedImagePropertyAmenities[4]}</p>
                <p>{selectedImagePropertyAmenities[5]}</p>
                <h3>Price</h3>
                <p>${selectedImage.price}</p>
              </div>
              <div className={styles.ModalMap}>
                <p>Map</p>
                {/* MapContainer and related components are currently commented out */}
              </div>
            </div>
            <div className={styles.ModalDescriptioncontact}>
              <h3>Contact</h3>
              {/* Render selected image's contact information */}
              <p>Phone Number: {selectedImagePropertyContact[0]}</p>
              <p>Email: {selectedImagePropertyContact[1]}</p>
            </div>
            <div className={styles.ModalUsercomments}>
              <h3>What our users are saying...</h3>
              <p>User comment 1</p>
              <p>user comment 2</p>
              <p>user comment 3</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default PropertyListing;
