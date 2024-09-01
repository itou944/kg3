
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
import styles from './Search.module.css';

const searchClient = algoliasearch('W1BFOTM5SR', '063ea0dc1059c812d70e813b3202da0a');
const INDEX_NAME = 'const'; // Make sure this is the correct index name

const AutoCompleteComponent = ({ hits, currentRefinement, refine }) => (
  <div className={styles.autocomplete}>
    <SearchBox
      currentRefinement={currentRefinement}
      refine={refine}
      placeholder="Search for Key Guns..."
    />
    {currentRefinement && hits.length > 0 && (
      <div className={styles.suggestions}>
        {hits.map(hit => (
          <div key={hit.objectID} className={styles.suggestion}>
            {hit.icon && <img src={hit.icon} alt={hit.name} className={styles.suggestionIcon} />}
            <div>
              <Highlight attribute="name" hit={hit} />
              <span className={styles.suggestionCategory}>
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

const Search = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSearchStateChange = (searchState) => {
    setShowResults(!!searchState.query);
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
        <AutoComplete />
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