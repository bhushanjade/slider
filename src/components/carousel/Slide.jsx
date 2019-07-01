import React from "react";
import propTypes from "prop-types";

export default class Slide extends React.Component {
    render() {
        // const styles = {
        //   backgroundImage: `url(${this.props.url})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center"
        //   // transition: "transition1l"
        // };
        return (
            <div className="slide transition1l">
                <p>{this.props.text}</p>
            </div>
        );

    }
}

Slide.propTypes = {
    text: propTypes.string.isRequired,
};



