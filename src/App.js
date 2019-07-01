import React, {Component, Suspense} from 'react';

import './App.css';
import {Redirect} from 'react-router-dom';
import {Header} from './components/Header';
import convertNumToWords from './helper/convertNumToWords';
import {Button} from 'reactstrap';

//lazy load carousel & popup
const Carousel = React.lazy(() => import('./components/carousel/Carousel'));
const Popup = React.lazy(() => import('./components/Popup'));


/**
 * App holds the all components
 * */
class App extends Component {
    hidePopup = () => {
        this.setState({
            showPopup: false
        });
    }

    logoutHandler = () => {
        localStorage.removeItem(process.env.REACT_APP_AUTH_LOCALSTORAGE_KEY);
        window.location = process.env.PUBLIC_URL;
    }

    resetCount = () => {
        this.setState({
            totalSlides: 0,
            slides: {},
            selectedNums: []
        });
    }
    onChangeEventHandler = (val) => {
        let slides = {};
        /*
        * Create Slide key value pair here and pass it to Carousel
        * key => Number
        * value => Number in words
        * eg {1:one}
        * */
        for (let i = 1; i <= val; i++) {
            slides[i] = convertNumToWords(i);
        }
        this.setState({
            totalSlides: val,
            slides: slides,

        });

        this.setState(prevState => ({
            selectedNums: [...prevState.selectedNums, val]
        }))

    }
    ShowPopup = () => {
        if (this.state.selectedNums.length > 0) {
            this.setState({
                showPopup: true
            });
        } else {
            alert('Select Slides First');
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            totalSlides: 0,
            slides: {},
            selectedNums: []
        }
    }

    componentWillUnmount() {


    }

    render() {
        // if (this.state.showPopup) {
        //     return(
        //         <Redirect to={{
        //             pathname: '/finish',
        //             state: {selectedNums: this.state.selectedNums}
        //         }}
        //         />
        //     )
        // }

        return (
            <>


                <Header logoutHandler={this.logoutHandler} onChangeEventHandler={this.onChangeEventHandler} totalSlides={this.state.totalSlides}/>


                {this.state.totalSlides > 0 ?
                    <Suspense fallback={<div>Loading...</div>}> <Carousel totalSlides={this.state.totalSlides}
                                                                          slides={this.state.slides}/></Suspense> :
                    <h1>Select Num Of Slide</h1>}

                <br/>
                {this.state.selectedNums.length > 0 ? <Button onClick={this.ShowPopup}>Finish</Button> : null}

                {this.state.showPopup ?
                    <Suspense fallback={<div>Loading...</div>}> <Popup resetCount={this.resetCount}
                                                                       hidePopup={this.hidePopup}
                                                                       selectedNums={this.state.selectedNums}/></Suspense> : null}

            </>
        )
            ;
    }
}


// function App() {
//
// }

export default App;
