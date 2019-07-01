import React from "react";
import Slide from "./Slide";
import Arrow from "./Arrow";
import DotsMemo from './DotsMemo';
import '../../slider.css';
import {Header} from "../Header";
import propTypes from 'prop-types';


export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.selectSlide = this.selectSlide.bind(this);
        this.state = {
            currentImageIndex: 1
        };
    }

    selectSlide(slideNum) {

        this.setState({
            currentImageIndex: slideNum
        });
    }

    previousSlide() {
        const lastIndex = parseInt(this.props.totalSlides, 10);
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 1;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = parseInt(this.props.totalSlides, 10);
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 1 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    /**
     componentDidMount() {
    //this.startCarousel();
  }
     startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.transitionSlides();
    }, 1500);
};

     transitionSlides() {
  console.log("tranistion");
}
     */
    render() {
        let currentImageIndex = this.state.currentImageIndex;
        let dots = [];
        for (let i = 1; i <= parseInt(this.props.totalSlides); i++) {
            dots.push(<DotsMemo title={i} key={i} isActive={currentImageIndex === i ? true : false}
                                onClickHandler={() => this.selectSlide(i)}/>)
        }
        return (
            <>
                <div className="slideshow-container">

                    <Slide text={this.props["slides"][currentImageIndex]}/>


                    <Arrow direction="next" clickFunction={this.nextSlide} glyph="&#9654;"/>
                    <Arrow direction="prev" clickFunction={this.previousSlide} glyph="&#9664;"/>
                </div>

                <div className="dot-container">
                    {dots}
                </div>
            </>
        );

    }
}



Header.propTypes = {
    totalSlides: propTypes.string.isRequired,
    slides:propTypes.object.isRequired,
};


