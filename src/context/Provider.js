// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {
  const cars = {
    red: false,
    blue: false,
    yellow: false,
  };
  const [carsState, setCarsState] = useState(cars)

  const moveCar = (car, side) => {
    setCarsState({
        ...carsState,
        [car]: side,
      });
  };

  const context = {
    ...carsState,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
