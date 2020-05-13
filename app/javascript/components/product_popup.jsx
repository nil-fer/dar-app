import React from "react"
import PropTypes from "prop-types"

const ProductPopup = ({handleClose, productShow, children}) => {
  const showHideClassName = productShow ? "modal display-block" : "modal display-none";

  return (<div className={showHideClassName}>
    <section className="modal-main">
      {children}
      <button onClick={handleClose}>close</button>
    </section>
  </div>);
};

export default ProductPopup;
