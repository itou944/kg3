// app/payment/page.js
import React from 'react';
import styles from './pricing.module.css';

const PricingTier = ({ name, price, features }) => (
  <div className={styles.pricingTier}>
    <h2 className={styles.tierName}>{name}</h2>
    <p className={styles.price}>${price}<span className={styles.perMonth}>/month</span></p>
    <ul className={styles.featureList}>
      {features.map((feature, index) => (
        <li key={index} className={styles.featureItem}>
          <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={styles.chooseButton}>
      Choose Plan
    </button>
  </div>
);

const PricingPage = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: 9.99,
      features: ['1 User', '10 Projects', '5GB Storage', 'Basic Support'],
    },
    {
      name: 'Pro',
      price: 19.99,
      features: ['5 Users', 'Unlimited Projects', '50GB Storage', 'Priority Support'],
    },
    {
      name: 'Enterprise',
      price: 49.99,
      features: ['Unlimited Users', 'Unlimited Projects', '500GB Storage', '24/7 Dedicated Support'],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Choose Your Plan</h1>
      <div className={styles.pricingGrid}>
        {pricingTiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;