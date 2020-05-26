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
          <div>{product.product_pic && <img src={product.product_pic.url} />}</div>
          <div>
            <h1>{product.name}</h1>
            <p>Категория: {product.category}</p>
            <p>Цена: {product.price} &#8381;</p>
            <p>Цена со скидкой: {product.discountPrice} &#8381;</p>
            <p>
              Цена за порцию / {product.weight_amount} {product.weight_type}
            </p>
            <div className="button_book button" onClick={this.showBookingModal}>
              Забронировать
            </div>
            <div className="button" onClick={this.showInstructionModal}>
              Как забрать товар?
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
