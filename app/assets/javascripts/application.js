// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .
//= require jquery
//= require jquery_ujs

const menu_items = document.getElementsByClassName('menu_item');

function checkClick(e, key) {
  document.getElementById('category_' + key).scrollIntoView(true);
}

$(document).ready(function() {
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
