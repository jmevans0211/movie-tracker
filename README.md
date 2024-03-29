# Movie Tracker

Movie Tracker is a React-Redux App that allows a user to sign in, see the latest movies, and favorite them for later.

### Contributors

[Lacy Rudd](https://github.com/dawnlunacy) , [Jeannie Evans](https://github.com/jmevans0211) , [Quinne Farenwald](https://github.com/qfarenwald)

<img width="1295" alt="movie-tracker" src="https://user-images.githubusercontent.com/48900496/68500723-9bd3ac00-0219-11ea-98c3-7e14ed11c461.png">


## Screenshots
<details>
  <summary> Data Mapping & Wireframes </summary>


Data Map
- To begin, the overall data flow and necessary components are mapped out.

![Movie Tracker homepage](src/images/MovieTracker_data-map.png)

InVision Prototype
- Home Page: Next, a design is implemented and basic user flow is considered.

![Movie Tracker prototype all movies](src/images/MovieTracker_protoype_all-movies.png)

![Movie Tracker prototype movie](src/images/MovieTracker_prototype_movie.png)

- Here is a clickable InVision Prototype: Click on a movies from the home screen then the main logo to get back.
https://projects.invisionapp.com/prototype/ck2c10pr0002ou501vi8y10og/play

</details>


<details>
  <summary>The Site</summary>
Homepage
- A user can scroll through movies on the home page and click to view more detailed movie info by clicking on a movie, but if a user wants to favorite a movie, they will be prompted to login or sign up.

![Movie Tracker home page](src/images/MovieTracker_home_not-logged-in.png)

![Movie Tracker movie page](src/images/MovieTracker_movie.png)

Sign Up Page
- A user can sign up to create an account that will allow favorites to be saved.

![Movie Tracker sign up](src/images/MovieTracker_signup.png)

- If the user does not fill in all inputs, an error will appear and they will not be routed to their account homepage.

![Movie Tracker sign up error](src/images/MovieTracker_signup-error.png)

- If the user already had an account, they can login.

![Movie Tracker Login](src/images/MovieTracker_login.png)

User Logged In Home Page
- Now a user is welcomed and the favoriting functionality is enabled.

![Movie Tracker User Login Home Page](src/images/MovieTracker_home-logged-in.png)

Favorite Page
- A user can favorite movies by clicking on the star on each movie. Those movies will then appear on a separate favorites page.

![Movie Tracker Favorites](src/images/MovieTracker_favorites.png)

- A user can logout at any time and be returned to the main homepage.

</details>


## Tech Stack

- React

- React Redux

- Tested with Jest/Enzyme.

- React Router.


## View the Site

To view browse movies and see movie details, [click here](https://movie-tracker-je.herokuapp.com/)!

To use site with login and favoriting fatures, follow instructions below.

   Clone repo.
```
   git clone https://github.com/jmevans0211/movie-tracker.git
```
   Install dependencies.
```
   npm install
```
   Run browser.
```
   npm start
```

### Focuses

- Write squeaky clean, well refactored code using ES6 syntax.

- Make informed design decisions to create a user-friendly application.

- Become comfortable with different network requests like GET, POST, & DELETE.

- Solidify concepts with React to create clean and re-useable components.

- Become comfortable with Redux’s lifecycle, creating actions, reducers, and connecting them to React components.

- Understand and solidify concepts with React component, asynchronous code, and Redux testing.

- Get more practice doing network requests with a backend.

### More

Go to the original repo at https://github.com/dawnlunacy/movie-tracker to view the complete project board and commit history. This was a group project completed November 2019.
