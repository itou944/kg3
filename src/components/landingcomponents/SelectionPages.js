import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Home.module.css';
import KeyGunSelection from './KeyGunSelection';
import SearchBar from './Searchbar';

const SelectionPages = () => {
  const router = useRouter();

  const handleTestKeyGuns = () => {
    router.push(`/landingpage2/testkeygun`);
  };

  return (
    <section className={styles.selectionPages}>
      <h3 className={styles.sectionTitle}>Selection Pages</h3>
      <div className={styles.selectionGrid}>
        <div className={styles.card}>
          <h4>Select Your KeyGuns</h4>
          <p>Customize your learning tools</p>
          <KeyGunSelection />
          <div className={styles.buttonGroup}>
            <button className={styles.secondaryButton}>Search KeyGuns</button>
            <button className={styles.secondaryButton} onClick={handleTestKeyGuns}>Test KeyGuns</button>
            <button className={styles.secondaryButton}>Create KeyGuns</button>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <SearchBar />
          </div>
          <div className={styles.card}>
            <h4>Top by Theme</h4>
            {/* Add content for top themes */}
          </div>
          {['Maths Students', 'Students'].map((title, index) => (
            <div key={index} className={styles.card}>
              <h4>Selection for {title}</h4>
              <div className={styles.selectionRow}>
                <div className={styles.iconGroup}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={styles.selectionIcon}></div>
                  ))}
                </div>
                <button className={styles.primaryButton}>Continue</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionPages;
