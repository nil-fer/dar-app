// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require('@rails/ujs').start();
require('@rails/activestorage').start();
require('jquery');
// require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// // const imagePath = (name) => images(name, true)
// // Support component names relative to this directory:
// console.log('sdsajdas')
// var componentRequireContext = require.context("components", true);
// var ReactRailsUJS = require("react_ujs");
// ReactRailsUJS.useContext(componentRequireContext);

$(document).ready(function() {
  window.checkClick = function(e, key) {
    document.getElementById('category_' + key).scrollIntoView(true);
  };

  $('.decrease_quantity').click(function() {
    const element = $(this).siblings('.quantity_value');
    const quantity = parseInt(element.text());

    if (quantity > 0) {
      element.text(quantity - 1);
    }
  });

  $('.increase_quantity').click(function() {
    const element = $(this).siblings('.quantity_value');
    const quantity = parseInt(element.text());

    element.text(quantity + 1);
  });

  $('.batch_form').submit((event) => {
    const form = $('.batch_form');
    $(document)
      .find('.quantity_value')
      .each(function(index) {
        const value = $(this).text();
        const product_id = $(this).data('product_id');
        const batch_product_id = $(this).data('batch_product_id') || '';

        if (value === '0' && batch_product_id === '') {
          return;
        }

        form.append(
          `<input name='batch[batches_products_attributes][${index}][quantity]' ` +
            `value='${$(this).text()}' type='hidden'>`,
        );
        form.append(
          `<input name='batch[batches_products_attributes][${index}][product_id]' ` +
            `value='${$(this).data('product_id')}' type='hidden'>`,
        );
        form.append(
          `<input name='batch[batches_products_attributes][${index}][id]' ` +
            `value='${$(this).data('batch_product_id') || ''}' type='hidden'>`,
        );
      });
  });
});
