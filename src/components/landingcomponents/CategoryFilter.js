// CategoryFilter.js
import React from 'react';
import {ChevronDown } from 'lucide-react';// Adjust the import path according to your project structure
import styles from './CategoryFilter.module.css'; // Import the new CSS module

const CategoryFilter = ({ selectedCategory, setSelectedCategory, softwareCategories }) => {
  return (
    <div className={styles.categoryFilter}>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={styles.categorySelect}
      >
        <option value="All">All Categories</option>
        {softwareCategories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <ChevronDown className={styles.selectIcon} />
    </div>
  );
};

export default CategoryFilter;
