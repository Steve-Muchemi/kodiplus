import React from 'react';
import styles from './Header.module.css';
import PostData from './postData';
import LoginForm from './loginform';



import kodiplus_logo from './kodiplus_logo.png';

function Header(){
return (
<div className = {styles.header}>
    <nav className= {styles.navbar}>
        <img src={kodiplus_logo} alt={"kodiplus_logo"} className = {styles.logo}/>
        <ul>
            <li> About </li>
            <li>Contact</li>
            <LoginForm className={styles.PostData}/>
            <PostData className={styles.PostData}/>
        </ul>
    </nav>
</div>

);

}

export default Header;