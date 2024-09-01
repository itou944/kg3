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
  connectAutoComplete
} from 'react-instantsearch-dom';
import styles from './Home.module.css';
import searchStyles from './search.module.css'; // Assuming you're reusing some styles

const searchClient = algoliasearch('W1BFOTM5SR', '063ea0dc1059c812d70e813b3202da0a');
const INDEX_NAME = 'const'; // Make sure this is the correct index name

const AutoCompleteComponent = ({ hits, currentRefinement, refine }) => (
  <div className={searchStyles.autocomplete}>
    <SearchBox
      currentRefinement={currentRefinement}
      refine={refine}
      placeholder="Search for courses, topics..."
    />
    {currentRefinement && hits.length > 0 && (
      <div className={searchStyles.suggestions}>
        {hits.map(hit => (
          <div key={hit.objectID} className={searchStyles.suggestion}>
            {hit.icon && <img src={hit.icon} alt={hit.name} className={searchStyles.suggestionIcon} />}
            <div>
              <Highlight attribute="name" hit={hit} />
              <span className={searchStyles.suggestionCategory}>
                <Highlight attribute="category" hit={hit} />
              </span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const AutoComplete = connectAutoComplete(AutoCompleteComponent);

const Hero = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSearchStateChange = (searchState) => {
    setShowResults(!!searchState.query);
  };

  return (
    <section className={styles.hero}>
      <h2 className={styles.heroTitle}>Welcome to the AI Learning Platform</h2>
      <p className={styles.heroSubtitle}>Elevate your learning experience with personalized AI-driven guidance</p>
      <div className={styles.actionContainer}>
        <InstantSearch 
          searchClient={searchClient} 
          indexName={INDEX_NAME}
          onSearchStateChange={handleSearchStateChange}
        >
          <Configure hitsPerPage={10} />
          <form className={styles.searchForm}>
            <AutoComplete />
          </form>
          {showResults && (
            <div className={searchStyles.content}>
              <div className={searchStyles.facets}>
                <h2 className={searchStyles.facetsTitle}>Categories</h2>
                <RefinementList attribute="category" />
              </div>
              <div className={searchStyles.results}>
                <Hits hitComponent={Hit} />
              </div>
            </div>
          )}
        </InstantSearch>
        <button className={styles.primaryButton}>Start Learning →</button>
      </div>
    </section>
  );
};

const Hit = ({ hit }) => {
  return (
    <div className={searchStyles.hitCard}>
      <div className={searchStyles.hitHeader}>
        {hit.icon && <img src={hit.icon} alt={hit.name} className={searchStyles.hitIcon} />}
        <h2 className={searchStyles.hitTitle}>
          <Highlight attribute="name" hit={hit} />
        </h2>
      </div>
      <div className={searchStyles.hitCategory}>
        Category: <Highlight attribute="category" hit={hit} />
      </div>
    </div>
  );
};

export default Hero;
