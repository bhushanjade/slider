import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';


class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isAuthenticated: false,
        };
    }


    /*
     * USER NAME PASSWORD should be provided in ENV.
     * componentWillReceiveProps is deprecated, so will be using this method.
     * By default this method is called on mounting of component
     * @see ref : https://reactjs.org/docs/react-component.html
     * so when first time it calls we check token exist in localstorage return true/false
     * */
    static getDerivedStateFromProps(nextProps, prevState) {

        if (localStorage.getItem(process.env.REACT_APP_AUTH_LOCALSTORAGE_KEY) !== null) {
            return {
                loading: false,
                isAuthenticated: true,
            };
        }
        if (localStorage.getItem(process.env.REACT_APP_AUTH_LOCALSTORAGE_KEY) === null) {
            return {
                loading: false,
                isAuthenticated: false,
            };
        }

    }
//TODO : review to keep or remove it
    // componentDidMount() {
    //
    //     if (localStorage.getItem('token') !== null) {
    //         console.log("rendering 12");
    //         this.setState({
    //             loading: false,
    //             isAuthenticated: true,
    //         });
    //     }
    //
    //     if (localStorage.getItem('token') === null) {
    //         this.setState({
    //             loading: false,
    //             isAuthenticated: false,
    //         });
    //     }
    //
    // }


    render() {

        const {component: Component, layout: Layout, ...rest} = this.props;
        const {isAuthenticated} = this.state;

        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated && !this.state.loading ? (

                        <Layout component={Component} {...this.props} />
                    ) : (
                        this.state.loading ? (
                            <div>Please Wait...</div>
                        ) : (
                            <Redirect to={{
                                pathname: '/login',
                                state: {from: this.props.location},
                            }}/>
                        )
                    )
                }
            />
        );
    }
}


export default (PrivateRoute);
