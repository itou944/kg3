"use client"



import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { KG_RECOMMENDATIONS } from '../../constants/constants';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.toLowerCase().startsWith('kg')) {
      const filtered = KG_RECOMMENDATIONS.filter(kg => 
        kg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kg.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRecommendations(filtered);
      setIsOpen(true);
    } else {
      setRecommendations([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectRecommendation = (recommendation) => {
    setSearchTerm(recommendation.name);
    setIsOpen(false);
  };

  return (
    <div className="searchbar-container" ref={wrapperRef}>
      <div className="search-input-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search KeyGuns..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      {isOpen && recommendations.length > 0 && (
        <ul className="recommendations-list">
          {recommendations.map((kg) => (
            <li 
              key={kg.code} 
              onClick={() => handleSelectRecommendation(kg)}
              className="recommendation-item"
            >
              <span className="kg-code">{kg.code}</span>
              <span className="kg-name">{kg.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;