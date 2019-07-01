import React, {memo} from 'react';
import NumberDropDown from './NumberDropDown';
import {Button} from 'reactstrap';
import propTypes from 'prop-types';

export const Header = memo(
    ({onChangeEventHandler, totalSlides, logoutHandler}) => {

        return <div className="header jumbotron">
            <div className="float-right mb-5">
                <Button onClick={logoutHandler}>Logout</Button>
            </div>


            <NumberDropDown totalSlides={totalSlides} onChangeEventHandler={onChangeEventHandler}/>

        </div>
    }
);


Header.propTypes = {
    totalSlides: propTypes.number.isRequired,
    onChangeEventHandler:propTypes.func.isRequired,
    logoutHandler:propTypes.func.isRequired,
};


