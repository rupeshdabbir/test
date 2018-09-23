<img src="http://thetakehome.com/wp-content/uploads/2015/11/thetakehomelogo.png" alt="react take home" align="center" />

<br />

<div align="center"><strong>Take Home Project</strong></div>
<div align="center">This project grabs a list of data from <a href="https://jsonplaceholder.typicode.com/posts">this</a> API and shows information on the page. </div>

<br />

## Highlights: 

I wanted to spend sometime and add some of my own customizations for the project.

<dl>
  <dt>React Project</dt>
  <dd>This project uses React 16.4 for the view part.</dd>

  <dt>Redux</dt>
  <dd>I've used Redux for maintaining state management of the project.</dd>

  <dt>JavaScript</dt>
  <dd>Use of combination of ES5 / template strings, object destructuring, arrow functions, JSX syntax.</dd>

  <dt>Next generation CSS - Using Styled Components</dt>
  <dd>I've written composable CSS that's co-located with the components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Essentially we are shipping only the styles that are on the page for the best performance.</dd>

  <dt>Code Quality (ESLint) / Prettier</dt>
  <dd>Like I've spoken in person. I've added code quality tools like ESlint, Prettier (for making it look prettier)</dd>

  <dt>Little bit SEO</dt>
  <dd>Added support for better SEO (Tag management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

## Architecture
1. The entry point of the project starts at app.js
2. There's a route for "en" which is the default route of the project.
3. The project is divided into few components

* `<App />`
  
  * `<HomePage />` component that renders home page.

      * This homepage container has MyListItem container which in turn calls.
  
      * List and ListItem components (Which are indivisual items of the list.)
  
      * There are loading components, image and H1 tag components as well.


## Tests:
- Each component has their own tests written. (I've added some mocks as part of internal that I generally use for my personal projects).
- I've been experimenting with Enzyme for testing React components and their outputs.
- There are few tests that I can improve but due to time constraint, I was able to only accomplish so much!

## Running the code

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo.
3.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`_<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
4.  Run `npm run clean` to delete the example app.


## Future Enhancements:
There are so many things I can definitely improve but due to time constraints, there's only so much I can do. We can improve the following:

- Better tests. Have more granular tests per functionality base.
- Better code coverage.
- Better ESLINT rules. Currently ESLint wasn't properly configured. I haven't gotten time to spend on it.