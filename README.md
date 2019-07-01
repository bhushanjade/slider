This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### [Slider Demo](https://bhushanjade.github.io/slider/)
### URL: https://bhushanjade.github.io/slider/
### Packages USED :
- [Reactstrap](https://reactstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### References/Guides :
1. https://facebook.github.io/create-react-app/docs/deployment#customizing-environment-variables-for-arbitrary-build-environments

### Configuration 
###### Note: For prod deployment for UsernName/Password it should have [`.env.production`].(https://facebook.github.io/create-react-app/docs/deployment#customizing-environment-variables-for-arbitrary-build-environments)
- Create `.env` file & add 
    ```
   REACT_APP_USER_NAME=<username>
   REACT_APP_PASSWORD=<password>
   REACT_APP_AUTH_LOCALSTORAGE_KEY=token
   REACT_APP_PUBLIC_URL=https://bhushanjade.github.io/slider/
    ```
- Run `npm run test` to run unit test cases. ( It uses CRA so all options will work.)

# Features In Current Version:
1. Login with username & password
2. Select Number from dropdown to display sides.
3. on Click of Finish, A Model box showing all numbers that user selected while using app


### Folder Structure & Details
`Windows cmd` : `tree /f`
```
│   .env                        => Local Environment File
│   .env.production             => Production Environment File
───src
    │   App.css
    │   App.js
    │   App.test.js
    │   index.css
    │   index.js                => App & Router Setup
    │   logo.svg
    │   serviceWorker.js
    │   slider.css              => Slider Css
    │   
    ├───components
    │   │   Header.jsx          => Header with Dropdowm component
    │   │   Login.jsx           => Login Component
    │   │   NumberDropDown.js   => Number Dropdown
    │   │   Popup.jsx
    │   │   
    │   └───carousel            => Carousel Components
    │           Arrow.jsx
    │           Carousel.jsx
    │           DotsMemo.jsx
    │           Slide.jsx
    │           
    ├───helper
    │       convertNumToWords.js => Helper function to convert number to words
    │       getLength.js         => Helper function to find length of number
    │       
    └───hoc 
            DefaultLayout.js    => To handle Layout
            PrivateRoute.js     => To handle login
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
