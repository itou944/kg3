"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import styles from './TestKeyGun.module.css';
import Header from '../../../components/landingcomponents/Header';
import Footer from '../../../components/landingcomponents/Footer';

const TestKeyGun = () => {
  const router = useRouter();
  const selectedKeyGuns = useSelector(state => state.keyGuns.selectedKeyGuns);
  const [selectedKeyGun, setSelectedKeyGun] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setIsScrollable(scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth);
    }
  }, [selectedKeyGuns]);

  const handleGoBack = () => {
    router.push('/landingpage');
  };

  const handleSelectKeyGun = (keyGun) => {
    setSelectedKeyGun(keyGun);
  };

  const handleAddNewKeyGun = () => {
    // Implement the logic to add a new KeyGun
    console.log('Add new KeyGun');
  };

  const handleAskAI = () => {
    if (selectedKeyGun && inputMessage) {
      setAiResponse(`This is a simulated AI response for "${selectedKeyGun.name}" based on your input: "${inputMessage}"`);
    } else {
      alert('Please select a KeyGun and enter a message.');
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Select Your Learning Assistant</h1>
        <div className={styles.keyGunScrollContainer} ref={scrollContainerRef}>
          <div className={`${styles.keyGunGrid} ${isScrollable ? styles.scrollable : ''}`}>
            {selectedKeyGuns.map((keyGun) => (
              <div
                key={keyGun.id}
                className={`${styles.keyGunCard} ${selectedKeyGun?.id === keyGun.id ? styles.selectedCard : ''}`}
                onClick={() => handleSelectKeyGun(keyGun)}
              >
                <img src={keyGun.icon} alt={keyGun.name} className={styles.keyGunIcon} />
                <h2 className={styles.keyGunName}>{truncateText(keyGun.name, 15)}</h2>
              </div>
            ))}
            <div className={`${styles.keyGunCard} ${styles.addNewCard}`} onClick={handleAddNewKeyGun}>
              <div className={styles.addIcon}>+</div>
              <h2 className={styles.keyGunName}>Add New</h2>
            </div>
          </div>
        </div>
        <div className={styles.chatInterface}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.textInput}
              placeholder="Ask your learning assistant..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              maxLength={100}
            />
            <button className={styles.askButton} onClick={handleAskAI}>
              Ask
            </button>
          </div>
          {aiResponse && (
            <div className={styles.aiResponse}>
              <p>{aiResponse}</p>
            </div>
          )}
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.backButton} onClick={handleGoBack}>
            Back to Selection
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestKeyGun;