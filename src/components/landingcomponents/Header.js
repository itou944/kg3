import React from 'react';
import styles from './Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>KeyGun</h1>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <button className={styles.primaryButton}>Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
