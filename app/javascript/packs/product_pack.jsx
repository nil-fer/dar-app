import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ProductExtendedPopup from '../components/product_extended_popup';

document.addEventListener('DOMContentLoaded', () => {
  const productPopup = document.getElementsByClassName('product_card_extended');

  if (productPopup) {
    return;
  }
  const productPopupInfo = JSON.parse(productPopup[0].dataset.props);

  ReactDOM.render(
    <ProductExtendedPopup {...productPopupInfo} />,
    document
      .getElementsByClassName('product_card_extended')[0]
      .appendChild(document.createElement('section')),
  );
});
