# Tyler Greff - Demo

## Breaking down the page

I chose to use the 'recipes' dataset for this project. While I have a very strong background in ecommerce and could have used this use-case, I opted to build a search page that fits well with my own personal passion - cooking and making recipes.

## Modifying the dataset

To craft a better search experience for the end user I adjusted some of the existing data and added a new field. First, I used the existing 'cuisine_path' attribute and broke this down using the '/' character as a delimiter. This allowed me to break up the single attribute into 'Category', 'subCategory1', 'subCategory2', and 'subCategory3'. I used the first two attributes in the facet filtering on the left menu. I also added a 'Difficulty' attribute to to create a simple, yet crucial filter for the user. The labels 'Easy', 'Moderate', and 'Hard' were assigned to each recipe using the total time as a guideline. Recipes under an hour are 'easy', while anything beyond that - but less than five hours - is considered 'moderate'. Anything longer is considered 'hard'. While this isn't the only metric available, in my experience it is an accurate measure of recipe difficulty in many cases. Alternatively, a count on ingredients/steps can be used to also influence this attribution.

## What's Next

An easy next step will be to better breakdown the ingredients and give the user the ability to filter using specific ingredients in the left menu. Users can search for and add ingredients facets for 'core' foods. This can be useful when considering what ingredients are already on hand and can be used immediately to prepare a recipe. Be careful not to overwhelm the user with 100+ ingredients. This should be a carefully curated (even personalized) list based on user behavior and TOP ingredients.

---

# instantsearch-app

_This project was generated with [create-instantsearch-app](https://github.com/algolia/instantsearch/tree/master/packages/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.
