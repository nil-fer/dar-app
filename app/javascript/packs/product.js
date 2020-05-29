import ReactDOM from 'react-dom';
import React from 'react';

import ProductsList from '../components/products_list';

document.addEventListener('DOMContentLoaded', () => {
  const productBlocks = document.getElementsByClassName('react-products-list');

  [...productBlocks].forEach((block) => {
    const products = JSON.parse(block.dataset.products);
    const discount = JSON.parse(block.dataset.discount);

    ReactDOM.render(<ProductsList products={products} discount={discount} />, block);
  });
});
