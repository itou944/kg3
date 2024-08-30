import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { addKeyGun, removeKeyGun } from '../../redux/features/keyGunsSlice';
import { softwareCategories } from '../../constants/constants';
import styles from './KeyGunSelection.module.css';
import CategoryFilter from './CategoryFilter';

const ITEMS_PER_PAGE = 9;

const KeyGunSelection = () => {
  const dispatch = useDispatch();
  const { availableKeyGuns, selectedKeyGuns } = useSelector(state => state.keyGuns);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredKeyGuns, setFilteredKeyGuns] = useState(availableKeyGuns);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredKeyGuns(availableKeyGuns);
    } else {
      setFilteredKeyGuns(availableKeyGuns.filter(keyGun => keyGun.category === selectedCategory));
    }
    setCurrentPage(1);
  }, [selectedCategory, availableKeyGuns]);

  const toggleKeyGun = (keyGun) => {
    if (selectedKeyGuns.find(kg => kg.id === keyGun.id)) {
      dispatch(removeKeyGun(keyGun));
    } else if (selectedKeyGuns.length < 4) {
      dispatch(addKeyGun(keyGun));
    }
  };

  const totalPages = Math.ceil(filteredKeyGuns.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedKeyGuns = filteredKeyGuns.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h4 className={styles.title}>Select Your KeyGuns</h4>
        <p className={styles.subtitle}>Customize your learning tools (Select up to 4)</p>
        <div className={styles.categoryFilter}>
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            softwareCategories={softwareCategories}
          />
        </div>
        <div className={styles.keygunGrid}>
          {displayedKeyGuns.map((keyGun) => (
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
        <div className={styles.pagination}>
          <button 
            onClick={goToPrevPage} 
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            <ChevronLeft size={20} />
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>Search KeyGuns</button>
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