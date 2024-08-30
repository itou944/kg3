import React from 'react';
import styles from './ColorfulButton.module.css';

const ColorfulButton = ({ onClick, disabled, children }) => {
  return (
    <button
      className={styles.colorfulButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ColorfulButton;