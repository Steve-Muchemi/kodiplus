import React, { useState } from 'react';
import Modal from 'react-modal';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


import styles from './loginform.module.css';

// Initialize Firebase app
const firebaseConfig = {
  // Your Firebase config object goes here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function LoginForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [loginerror, setloginerror] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);


  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      console.log('Logged In');
      setLoggedIn(true);
      setName(name);
      setModalOpen(false); // Close the modal after successful login
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      const user = getAuth().currentUser;
      console.log('Signed Up', name);
      setLoggedIn(true);
      setUserName(name);
      setModalOpen(false); // Close the modal after successful sign up
    } catch (error) {
      console.log(error);

      const errorMessage = error.message;
      const start = errorMessage.indexOf('The email address');
      const end = errorMessage.indexOf('(auth/email-already-in-use)');


      if (start !== -1 && end !== -1) {
        setloginerror(errorMessage.slice(start, end));
      } else {
        setloginerror('An error occurred during sign up.');
      }

    }
  };

  const handleLogout = async () => {
    try {

      await getAuth().signOut();
      setLoggedIn(false);
      console.log('Logged Out');
      setShowDropdown(true);
    } catch (error) {
      console.log(error);
    }
  };


  const toggleDropdownTrue = () => {
    setShowDropdown(true);
  };

const toggleDropdownFalse = () =>
{
  setShowDropdown(false);
}

  return (
    <div>
      {!isLoggedIn && (
        <button onClick={handleClick} className={styles.text}>Login</button>
      )}
      {
        isLoggedIn && (

                <div>
          {/* Dropdown Menu */}
          <div className={styles.dropdownContainer}>
            {!showDropdown && <button onClick={toggleDropdownTrue} className={styles.text} style={{fontSize: '18px'}}>
              Welcome 😊!
            </button>}

            {showDropdown && <button onClick={toggleDropdownFalse} className={styles.text} style={{fontSize: '18px'}}>
              Welcome 😊!
            </button>}

            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <button onClick={handleLogout} className={styles.text} style={{fontSize: '12px'}}>
                  Logout?
                </button>
              </div>
            )}
          </div>
        </div>



        )
      }
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleClose}
        className={styles.modal}
      >
        {!displayName && (
          <form onSubmit={handleLogin} className={styles.form}>
          <p style = {{fontWeight: 'bold'}}> Welcome back! Login with your details below 😊! </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button} onClick = {toggleDropdownFalse}>Log in</button>
            <button onClick={() => setDisplayName(true)} className={styles.button}>Sign Up</button>
          </form>
        )}
        {displayName && (
          <form onSubmit={handleSignUp} className={styles.form}>
          <p style = {{fontWeight : 'bold'}}> New to Kodip? Sign up today 😊! </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="How should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />


            <button type="submit" className={styles.button} style = {{padding : '0 px', margin : '4px 0'}}>Sign up</button>

            <p style = {{padding : '0 px', margin: '4px 0'}}> Or </p>

            <button onClick={() => setDisplayName(false)} className={styles.button} style = {{padding : '0 px', margin : '0 px'}}>Login</button>
            {loginerror && (
  <p style={{ color: '#ff6b6b', fontStyle: 'italic', fontWeight: 'bold', padding : '0 px', margin: '4px 0' }}>{loginerror}</p>
)}



          </form>
        )}
      </Modal>
    </div>
  );
}

export default LoginForm;
