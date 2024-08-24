"use client"
// src/app/landingpage2/page.js

import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Home.module.css';
import Header from '../../components/compolanding/Header';
import Hero from '../../components/compolanding/Hero';
import SelectionPages from '../../components/compolanding/SelectionPages';
import Features from '../../components/compolanding/Features';
import Footer from '../../components/compolanding/Footer';

const Home = () => {
  const selectedKeyGuns = useSelector(state => state.keyGuns.selectedKeyGuns);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <SelectionPages />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
