'use client';

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Highlight, RefinementList } from 'react-instantsearch-dom';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
import styles from './Search.module.css';

const searchClient = algoliasearch('W1BFOTM5SR', '063ea0dc1059c812d70e813b3202da0a');
const INDEX_NAME = 'const'; // Make sure this is the correct index name

const Search = () => {
  React.useEffect(() => {
    const search = autocomplete({
      container: '#autocomplete',
      placeholder: 'Search for Key Guns...',
      openOnFocus: true,  // Opens the autocomplete on focus to show results immediately
      getSources({ query }) {
        return [
          {
            sourceId: 'products',
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: INDEX_NAME,
                    query,
                    params: {
                      hitsPerPage: 10, // Limit results for better performance
                      attributesToRetrieve: ['name', 'category', 'icon'],
                      attributesToHighlight: ['name', 'category'],
                    },
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return (
                  <div className={styles.autocompleteItem}>
                    <div className={styles.itemIcon}>
                      {item.icon && <img src={item.icon} alt={item.name} />}
                    </div>
                    <div className={styles.itemContent}>
                      <components.Highlight hit={item} attribute="name" />
                      <span className={styles.itemCategory}>
                        <components.Highlight hit={item} attribute="category" />
                      </span>
                    </div>
                  </div>
                );
              },
            },
          },
        ];
      },
      onSubmit({ state }) {
        const query = state.query;
        // You can now trigger a search or update the component with the selected item or query
        console.log('User submitted:', query);
      },
    });

    return () => {
      search.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <h1 className={styles.title}>Key Guns Search</h1>
        <div id="autocomplete" className={styles.searchWrapper} />
        <div className={styles.content}>
          <div className={styles.facets}>
            <h2 className={styles.facetsTitle}>Categories</h2>
            <RefinementList attribute="category" />
          </div>
          <div className={styles.results}>
            <Hits hitComponent={Hit} />
          </div>
        </div>
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

