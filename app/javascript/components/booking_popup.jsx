import React from 'react';

const BookingPopup = ({ handleClose, bookingShow, productId }) => {
  const showHideClassName = bookingShow ? 'backdrop display-block' : 'backdrop display-none';

  const getCSRFToken = () => {
    return find(document.getElementsByTagName('meta'), (meta) => {
      return meta.name === 'csrf-token';
    }).content;
  };

  const submitForm = (event) => {
    if (event.target.closest('form').checkValidity()) {
      handleClose();
    }
  };

  const code = new Array(20).join().replace(/(.|$)/g, function() {
    return ((Math.random() * 36) | 0).toString(36);
  });

  return (
    <div className={showHideClassName}>
      <div className="modal booking-modal">
        <div className="booking-content">
          <h3>Ваш код - {code}</h3>
          <h3>Мы отправим его на вашу почту</h3>
          <br />
          <form action={'/products/' + productId + '/book'} data-remote="true" method="post">
            <input type="hidden" name="authenticity_token" value={getCSRFToken()} />
            <input type="hidden" name="code" value={code} />
              <div className="submit-field">
                <input placeholder="email@example.com" required="required" type="email" name="email" />
                <div className="button_submit button" onClick={submitForm}>Отправить</div>
              </div>
          </form>
        </div>
        <div className="close-btn" onClick={handleClose}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
