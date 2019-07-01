import React, {Component, Suspense} from 'react';

import PrivateRoute from './hoc/PrivateRoute';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import DefaultLayout from './hoc/DefaultLayout';

const App = React.lazy(() => import('./App'));
const Login = React.lazy(() => import('./components/Login'));
const Finish = React.lazy(() => import('./components/Popup'));


const NoMatch = ({}) => (
    <div>
        <h3>
            No match for <code>{window.location.pathname}</code>
        </h3>
    </div>
);
//Ref : https://github.com/facebook/create-react-app/issues/1765
//TODO : Add Browser Router for gh-pages
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>

                <PrivateRoute exact path="/" component={App}
                              layout={DefaultLayout}/>

                <Route path="/login" component={Login}/>


                <Route component={NoMatch}/>

            </Switch>
        </Suspense>
    </div>

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
