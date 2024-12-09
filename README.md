# Tyler Greff - Technical Interview

## Search Page Demo

### Breaking down the page

I made the decision to use the 'recipes' dataset for this project. While I have a very strong background in ecommerce and this was an appealing use-case to me, I opted to build a search page that fits well with my own personal passion - cooking and creating recipes.

This search page is intended to help everyday homecooks find new and different recipes, bringing variety to their daily meal planning. The search function itself will query against all major attributes and data provided from the dataset. This includes individual keywords and phrases from both the ingredient lists as well as the recipe directions. This lets users search for ingredients they already have, or want to try using, by simply adding them to the search query. Users are encouraged to select a difficulty level and categories from the filters provided on the left menu. 

The returned information includes the recipe name, a few of the nutritional facts (only 5 to limit the size of each result), the full recipe URL, and the cook times. This information is highly valued to the everyday cook as many prioritize time and then health factors when selecting a recipe. Seeing both the prep and cook time, as well as the nutritional value and servings, helps the user make a faster and more informed decision on which recipe they will ultimately use.

[Please access my search page - Farm to Data - here.](https://tjgreff.github.io/tg-algolia-demo/)

### Modifying the dataset

To craft a better search experience for the end user I adjusted some of the existing data and added a new field. First, I used the existing 'cuisine_path' attribute and broke this down using the '/' character as a delimiter. This allowed me to break up the single attribute into 'Category', 'subCategory1', 'subCategory2', and 'subCategory3'. I used the first two attributes in the facet filtering on the left menu.

I also added a 'Difficulty' attribute to to create a simple, yet crucial filter for the user. The labels 'Easy', 'Moderate', and 'Hard' were assigned to each recipe using the total time as a guideline. Recipes under an hour are 'easy', while anything beyond that - but less than five hours - is considered 'moderate'. Anything longer is considered 'hard'. While this isn't the only metric available, in my experience it is an accurate measure of recipe difficulty in many cases. Alternatively, a count on ingredients/steps can be used to also influence this attribution.

### What's Next

An easy next step will be to better breakdown the ingredients and give the user the ability to filter using specific ingredients in the left menu. Users can search for and add ingredients facets for 'core' foods. This can be useful when considering what ingredients are already on hand and can be used immediately to prepare a recipe. Be careful not to overwhelm the user with 100+ ingredients. This should be a carefully curated (even personalized) list based on user behavior and TOP ingredients.

---

## Customer Questions

### Question 1
Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

#### Response

Hi George,

...

Cheers,
Tyler

### Question 2

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

#### Response

Hi Matt,

...

Cheers,
Tyler

### Question 3

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

#### Response

Hi Leo,

...

Cheers,
Tyler