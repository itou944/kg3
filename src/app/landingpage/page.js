"use client"
// src/app/landingpage/page.js

import React from 'react';

import styles from './Home.module.css';
import Header from '../../components/landingcomponents/Header';
import Hero from '../../components/landingcomponents/Hero';
import SelectionPages from '../../components/landingcomponents/SelectionPages';
import Features from '../../components/landingcomponents/Features';
import Footer from '../../components/landingcomponents/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import KeyGunSelection from '../../components/landingcomponents/KeyGunSelection';
import ColorfulButton from '@/components/landingcomponents/ColorfulButton';

const Home = () => {
  const router = useRouter();
  const selectedKeyGuns = useSelector(state => state.keyGuns.selectedKeyGuns);

  const handleTestKeyGuns = () => {
    if (selectedKeyGuns.length === 4) {
      router.push('/landingpage/testkeygun');
    } else {
      alert('Please select exactly 4 KeyGuns before proceeding.');
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={styles.selectionPages}>
        <ColorfulButton
  onClick={handleTestKeyGuns}
  disabled={selectedKeyGuns.length !== 4}
>
  Test Selected KeyGuns
</ColorfulButton>
          <KeyGunSelection />
          <ColorfulButton
  onClick={handleTestKeyGuns}
  disabled={selectedKeyGuns.length !== 4}
>
  Test Selected KeyGuns
</ColorfulButton>
          
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;