'use client';

import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom';
import styles from './Search.module.css';

const searchClient = algoliasearch('W1BFOTM5SR', '063ea0dc1059c812d70e813b3202da0a');
const INDEX_NAME = 'const';

const Search = () => {
  const [showResults, setShowResults] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleSearchStateChange = (searchState) => {
    setShowResults(!!searchState.query);
  };

  const simulateAIResponseAndSearch = () => {
    const searchInput = document.querySelector('.ais-SearchBox-input');
    const userQuery = searchInput.value;

    // Dummy AI response simulation based on user input
    const dummyResponses = [
      `For "${userQuery}", I recommend trying 'High-powered rifle'.`,
      `Based on "${userQuery}", 'Tactical shotgun' might be suitable.`,
      `Considering "${userQuery}", 'Precision sniper rifle' could meet your requirements.`,
    ];
    const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
    setAiResponse(randomResponse);

    // Extract the recommended search term
    const recommendedTerm = randomResponse.match(/'([^']+)'/)[1];
    
    // Update the search bar with the recommended term
    searchInput.value = recommendedTerm;
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));

    // Ensure results are shown
    setShowResults(true);
  };

  return (
    <div className={styles.container}>
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        onSearchStateChange={handleSearchStateChange}
      >
        <Configure hitsPerPage={10} />
        <h1 className={styles.title}>Key Guns Search</h1>
        <div className={styles.searchContainer}>
          <SearchBox placeholder="Search for Key Guns or describe what you're looking for..." />
          <button onClick={simulateAIResponseAndSearch} className={styles.aiButton}>
            AI Assist & Search
          </button>
        </div>
        {aiResponse && (
          <div className={styles.aiResponse}>
            AI Recommendation: {aiResponse}
          </div>
        )}
        {showResults && (
          <div className={styles.content}>
            <div className={styles.facets}>
              <h2 className={styles.facetsTitle}>Categories</h2>
              <RefinementList attribute="category" />
            </div>
            <div className={styles.results}>
              <Hits hitComponent={Hit} />
            </div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
};

const Hit = ({ hit }) => {
  return (
    <div className={styles.hitCard}>
      <div className={styles.hitHeader}>
        {hit.icon && <img src={hit.icon} alt={hit.name} className={styles.hitIcon} />}
        <h2 className={styles.hitTitle}>
          <Highlight attribute="name" hit={hit} />
        </h2>
      </div>
      <div className={styles.hitCategory}>
        Category: <Highlight attribute="category" hit={hit} />
      </div>
    </div>
  );
};

export default Search;