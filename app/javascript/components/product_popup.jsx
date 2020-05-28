import React from 'react';

import BookingPopup from './booking_popup';
import InstructionPopup from './instruction_popup';

class ProductPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingShow: false,
      instructionShow: false,
    };
  }

  showBookingModal = () => {
    this.setState({ bookingShow: true });
  };

  hideBookingModal = () => {
    this.setState({ bookingShow: false });
    this.props.handleClose();
  };

  showInstructionModal = () => {
    this.setState({ instructionShow: true });
  };

  hideInstructionModal = () => {
    this.setState({ instructionShow: false });
  };

  render() {
    const { handleClose, productShow, product } = this.props;
    const showHideClassName = productShow ? 'backdrop display-block' : 'backdrop display-none';

    return (
      <div className={showHideClassName}>
        <div className="modal product-modal">
          <div className="product-pic">{product.product_pic && <img src={product.product_pic.url} />}</div>
          <div className="popup-product_card_info">
            <div className="details">
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <h3 className="discount_price">{product.discountPrice} &#8381;</h3>
              <p className="dark_grey">
                Цена за порцию / {product.weight_amount} {product.weight_type}
              </p>
              <div className="popup-card-buttons">
                <div className="button_book button" onClick={this.showBookingModal}>
                Забронировать
                </div>
                <div className="button_edit button" onClick={this.showInstructionModal}>
                Как забрать товар?
                </div>
              </div>
            </div>
            <BookingPopup
              bookingShow={this.state.bookingShow}
              handleClose={this.hideBookingModal}
              productId={product.id}
            ></BookingPopup>
            <InstructionPopup
              instructionShow={this.state.instructionShow}
              handleClose={this.hideInstructionModal}
            ></InstructionPopup>
          </div>
          <div className="close-btn" onClick={handleClose}>
            &times;
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPopup;
