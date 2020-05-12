import React from 'react'
// import $ from 'jquery'
import ProductPopup from '../components/product_popup'

export default class ProductExtendedPopup extends React.Component {
  constructor(props) {
  super(props)
  this.showModal = this.showModal.bind(this)
  this.hideModal = this.hideModal.bind(this)
  // this.userList = this.userList.bind(this)

  this.state = {
   flat: {
    product: this.props.product,
    productShow: false
   }
  }
 }

 showModal = () => {
  this.setState({productShow: true});
 };

 hideModal = () => {
  this.setState({productShow: false});
 };

 render() {


  return (<div className="product">
    <button type="button" onClick={this.showModal}>
      open
    </button>

    <ProductPopup productShow={this.state.productShow} handleClose={this.hideModal}>
     <h1> aa смог</h1>
    </ProductPopup>

  </div>)
 }
}
