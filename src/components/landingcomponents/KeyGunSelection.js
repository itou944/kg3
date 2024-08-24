import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Check } from 'lucide-react';
import { addKeyGun, removeKeyGun } from '../../redux/features/keyGunsSlice';
import styles from './KeyGunSelection.module.css';

const KeyGunSelection = () => {
  const dispatch = useDispatch();
  const { availableKeyGuns, selectedKeyGuns } = useSelector(state => state.keyGuns);

  const toggleKeyGun = (keyGun) => {
    if (selectedKeyGuns.find(kg => kg.id === keyGun.id)) {
      dispatch(removeKeyGun(keyGun));
    } else if (selectedKeyGuns.length < 4) {
      dispatch(addKeyGun(keyGun));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h4 className={styles.title}>Select Your KeyGuns</h4>
        <p className={styles.subtitle}>Customize your learning tools (Select up to 4)</p>
        <div className={styles.keygunGrid}>
          {availableKeyGuns.map((keyGun) => (
            <div
              key={keyGun.id}
              className={`${styles.keygunIcon} ${selectedKeyGuns.find(kg => kg.id === keyGun.id) ? styles.selectedKeygun : ''}`}
              onClick={() => toggleKeyGun(keyGun)}
            >
              <img src={keyGun.icon} alt={keyGun.name} className={styles.iconImage} />
              <p className={styles.keygunName}>{keyGun.name}</p>
              {selectedKeyGuns.find(kg => kg.id === keyGun.id) && (
                <div className={styles.tickMark}>
                  <Check size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>Search KeyGuns</button>
          <button className={styles.button}>Test KeyGuns</button>
          <button className={styles.button}>Create KeyGuns</button>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.card}>
          <h4 className={styles.title}>Selected KeyGuns</h4>
          <div className={styles.selectedKeygunsGrid}>
            {[...Array(4)].map((_, index) => (
              <div key={index} className={styles.selectedKeygunSlot}>
                {selectedKeyGuns[index] ? (
                  <div className={styles.selectedKeygunIcon}>
                    <img src={selectedKeyGuns[index].icon} alt={selectedKeyGuns[index].name} className={styles.iconImage} />
                    <p className={styles.keygunName}>{selectedKeyGuns[index].name}</p>
                  </div>
                ) : (
                  <p className={styles.emptySlot}>Empty Slot</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyGunSelection;