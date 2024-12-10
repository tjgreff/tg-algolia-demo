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

Thanks for reaching out - I'd be happy to help you better understand the world of search engines and how these concepts relate to the Algolia Platform.

Let's start with records. A single ['record'](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#algolia-records) is a data entry that contains a set of defined attributes. If we think of a phonebook, a record will be each individual entry. The entry will always have attributes like the name, address, and phone number of each person.

In this same example, the collection of persons' records - the phonebook - is an ['index'](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-from-the-dashboard/#create-a-new-index) in Algolia. An index, or a container for a set of records that can be searched together, is similar to a table in database. The major difference is that an index, in Algolia, is designed to enhance the searchability and discoverability of each record. When we say 'indexing', we mean that we are configuring the set of records to be searched on a webpage.

Regarding the core metrics and use of [Custom Rankings](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#algolias-ranking-strategy) - this is going to be heavily dependent on your specific use-case with Algolia. The idea behind Custom Rankings is that each business will have a different set of attributes they consider to be crucial to operations. While we do provided a set of predefined attribute rankings to influence results, this may not always work for you. A marketplace that is looking to encourage fair competition amongst many sellers, while providing the customer with the best experience possible, may look to use customer ratings as a core indicator. In this case, we would configure the 'rating' attribute to be considered in the Custom Ranking.

Let me know if you want to hop on a call and discuss this further. Search is a beast of a topic and we're hear to help you navigate it.

Cheers,
Tyler


### Question 2

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

#### Response

Hi Matt,

I'm sorry to hear that the latest dashboard launch isn't delivering the value we intended it to, but I really appreciate you letting me know about this issue.

I've forwarded this feedback to my manager as well as the product team. We will review this internally as a team and get back to you in the next few days with more information and a plan of attack to rectify the issue. Thanks for your patience as we look into this and find a proper resolution.

Cheers,
Tyler

*Clarification - In this scenario I deemed it best to 'escalate' the issue and look for feedback rather than immediate problem solving. It's just as possible that the user misunderstands the new feature as it is that there is a proper UX bug. Feedback from the team responsible for the product will help us better understand where the issue really lies.*


### Question 3

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high-level process look like?

Regards, Leo

#### Response

Hi Leo,

This is great news! I'm glad to hear you want to move forward with Algolia.

The 5000-feet view of the integration looks something like:
1. Review and sanitize data for import into Algolia
2. Import data and configure the index/indices as required
3. Build the Search UI in your existing experience and connect it to Algolia
4. Walk through the [Implementation Checklist](https://www.algolia.com/doc/guides/going-to-production/implementation-checklist/) prior to go-live
5. Launch and profit!

There are a few different ways that we can tackle the Algolia integration into your existing site. There are typically two common paths that our customers take - either doing the development themselves or hiring an implementation partner. There are a few things to consider for each path - here's a quick breakdown of some things to consider:

**Internal Development**
- How big is the internal dev and/or IT team that will complete the work?
- Does the team have bandwidth to complete the project on-schedule?
- What is the team's technical background? What languages are they familiar with? Have they worked with APIs before?

While the cost of this approach will be lower than hiring an SI partner, Customer Success hours will be required from Algolia to oversee the integration and ensure its success. It is crucial to have an experienced team involved as there are many platform features that must be considered.

**Integration Partner**
- What is the budget for the project?
- Do you require work outside of the core integration? (i.e.: site redesign, data analytics)
- Does the hired team align with your business culture and goals? Do they understand the intended value for implementing Algolia?

[Here](https://partners.algolia.com/directory) is a link to our partner directory so you can browse and see what firms have experience integrating into your existing platform. We would be happy to provide you with direct introductions and recommendations of a few partners we believe are best suited for this project.

Let me know your thoughts and how you might want to proceed. I'm always available for a call as well to discuss this further.

Cheers,
Tyler