import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Products from '../components/products';

document.addEventListener('DOMContentLoaded', () => {
  const productsInfo = JSON.parse(document.getElementsByClassName('batch_block_cards')[0].dataset.props)

  ReactDOM.render(
    <Products {...productsInfo} />,
    document
      .getElementsByClassName('batch_block_cards')[0]
      .appendChild(document.createElement('section')),
  );
});
