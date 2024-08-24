import React from 'react';
import styles from './Home.module.css';

const Features = () => {
  const featuresList = [
    { icon: '📊', title: 'Data-Driven Insights', description: 'Get personalized learning recommendations based on your progress and goals.' },
    { icon: '📚', title: 'Comprehensive Content', description: 'Access a wide range of subjects and learning materials tailored to your needs.' },
    { icon: '💬', title: 'AI-Powered Support', description: 'Receive instant help and answers to your questions from our intelligent assistant.' },
  ];

  return (
    <section className={styles.features}>
      <h3 className={styles.sectionTitle}>Why Choose KeyGun?</h3>
      <div className={styles.featureGrid}>
        {featuresList.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
