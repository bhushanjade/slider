import React from "react";
import {Header} from "../Header";
import propTypes from "prop-types";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);
Arrow.propTypes = {
    direction: propTypes.string.isRequired,
    glyph: propTypes.string.isRequired,
    clickFunction:propTypes.func.isRequired,
};
export default Arrow;
