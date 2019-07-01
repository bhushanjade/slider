import React from "react";
import Slide from "./Slide";
import propTypes from "prop-types";

const DotsMemo = React.memo(props => {
    const { isActive, onClickHandler,title } = props;

    return (
        <span title={title} className={`dot ${isActive ?  'active': null}`} onClick={onClickHandler}> </span>
    )
});
DotsMemo.propTypes = {
    isActive: propTypes.bool.isRequired,
    title: propTypes.string,
    onClickHandler: propTypes.func.isRequired,

};
export default DotsMemo;