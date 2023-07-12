import firebase from 'firebase/compat/app';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-KPygBA0nfwNoR7af9D1mRzuz0Ud2KYA",
    authDomain: 'localhost',
    projectId: 'kodiplus-1b34f'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
