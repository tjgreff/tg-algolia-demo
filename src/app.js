const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '5SHOS82D3T',
  'cf08257d560017a35b09e6ac5f73e970'
);

const search = instantsearch({
  indexName: 'recipes',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  // add search bar and provide placeholder to help user with searching for the first time
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for ingredients, cooking methods, or by recipe name...'
  }),
  
  // show off the speed and accuracy of the Algolia query
  instantsearch.widgets.stats({
    container: '#stats',
  }),

  // search results
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => {
        // Split ingredients by comma to create a list --> return only the first five to avoid overwhelming the user
        const nutritionalList = hit.nutrition
          ? hit.nutrition.split(',').slice(0, 5).map((nutrition) => html`<li>${nutrition.trim()}</li>`)
          : [];
    
        // HTML template for each individual 'hit' or result .. styling can be moved to a separate file in the future
        return html`
          <article style="display: flex; gap: 16px; align-items: flex-start;">
            <img src=${hit.img_src} alt=${hit.recipe_name} style="width: 100px; height: auto;" />
            <div style="flex: 1; display: flex; gap: 16px;">
              <div style="flex: 1;">
                <h1>${components.Highlight({ hit, attribute: 'recipe_name' })}</h1>
                <p>Total Time: ${components.Highlight({ hit, attribute: 'total_time' })}</p>
                <p>Prep Time: ${components.Highlight({ hit, attribute: 'prep_time' })}</p>
                <p>Servings: ${components.Highlight({ hit, attribute: 'servings' })}</p>
                <p style="margin-right:2rem;">
                  <a href=${hit.url} target="_blank" style="color: blue;">
                    ${components.Highlight({ hit, attribute: 'url' })}
                  </a>
                </p>
              </div>
              <div style="flex: 1;">
                <h4 style="margin-top: 2rem;">Nutrional Facts</h4>
                <ul>
                  ${nutritionalList}
                </ul>
              </div>
            </div>
          </article>
        `;
      },
    },
  }),

  // Left menu with filters and facets
  instantsearch.widgets.panel({
    templates: { header: () => 'Difficulty' },
  })(instantsearch.widgets.refinementList)({
    container: '#difficulty-list',
    attribute: 'difficulty',
  }),

  instantsearch.widgets.panel({
    templates: { header: () => 'Dish Type' },
  })(instantsearch.widgets.refinementList)({
    container: '#category-list',
    attribute: 'category',
    limit: 5,
    showMoreLimit: 15,
    showMore: true
  }),

  instantsearch.widgets.panel({
    templates: { header: () => 'Servings' },
  })(instantsearch.widgets.rangeSlider)({
    container: '#range-slider',
    attribute: 'servings',
    min: 1,
    max: 50,
    precision: 1,
    tooltips: false,
  }),

  instantsearch.widgets.panel({
    templates: { header: () => 'Rating' },
  })(instantsearch.widgets.ratingMenu)({
    container: '#rating-menu',
    attribute: 'rating',
  }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  
  // add pagination and table size ... in the future this can be put on a single line using a flex layout
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

  instantsearch.widgets.hitsPerPage({
    container: '#hits-per-page',
    items: [
      { label: '8 hits per page', value: 8, default: true },
      { label: '16 hits per page', value: 16 },
    ],
  }),
]);

search.start();