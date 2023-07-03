// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import fb from './firebase';
// import styles from './loginform.module.css';

// function LoginForm() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userName, setUserName] = useState('');
//   const [displayName, setDisplayName] = useState('');
//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const [name, setName] = useState('');

//   const handleClick = () => {
//     setModalOpen(true);
//   };

//   const handleClose = () => {
//     setModalOpen(false);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await fb.auth().signInWithEmailAndPassword(email, password);
//       console.log('Logged In');
//       setLoggedIn(true);
//       setName(name);
//       setModalOpen(false); // Close the modal after successful login
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await fb.auth().createUserWithEmailAndPassword(email, password);
//       const user = fb.auth().currentUser;
//       console.log('Signed Up', name);
//       setLoggedIn(true);
//       setUserName(name);
//       setModalOpen(false); // Close the modal after successful sign up
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await fb.auth().signOut();
//       setLoggedIn(false);
//       console.log('Logged Out');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       {!isLoggedIn && (
//         <button onClick={handleClick} className={styles.text}>Login</button>
//       )}
//       {
//         isLoggedIn && (
//           <div>
//             <h1>Welcome, {name}!</h1>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         )
//       }
//       <Modal
//         isOpen={modalOpen}
//         onRequestClose={handleClose}
//         className={styles.modal}
//       >
//         {!displayName && (
//           <form onSubmit={handleLogin} className={styles.form}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={styles.input}
//             />
//             <button type="submit" className={styles.button}>Log in</button>
//             <button onClick={() => setDisplayName(true)} className={styles.button}>Sign Up</button>
//           </form>
//         )}
//         {displayName && (
//           <form onSubmit={handleSignUp} className={styles.form}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="How should we call you?"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={styles.input}
//             />
//             <button type="submit" className={styles.button}>Sign up</button>
//           </form>
//         )}
//       </Modal>
//     </div>
//   );
// }

// export default LoginForm;
