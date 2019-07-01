import React, { Component } from 'react';

import { Route } from 'react-router-dom';

// import Sidebar from '../components/common/Sidebar';
// import Header from '../components/common/Header';

// import common from '../assets/css/common.css';
const DefaultLayout = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={matchProps => (
          <div className="DefaultLayout">
            {/*<Sidebar {...rest} />*/}
            {/*<Header {...rest} />*/}
            <div className="content-wrapper">
              <div className="container-fluid ">
                <Component {...matchProps} />
              </div>
            </div>
            <div className="Footer"></div>
          </div>
      )} />
  );
};

export default DefaultLayout;