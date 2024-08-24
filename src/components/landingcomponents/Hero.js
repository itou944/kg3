import React, { useState } from 'react';
import styles from './Home.module.css';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    // You might want to navigate to a search results page or update the UI based on the search
  };

  return (
    <section className={styles.hero}>
      <h2 className={styles.heroTitle}>Welcome to the AI Learning Platform</h2>
      <p className={styles.heroSubtitle}>Elevate your learning experience with personalized AI-driven guidance</p>
      <div className={styles.actionContainer}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search for courses, topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
        <button className={styles.primaryButton}>Start Learning →</button>
      </div>
    </section>
  );
};

export default Hero;