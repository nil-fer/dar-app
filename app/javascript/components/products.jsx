import React from "react"
import PropTypes from "prop-types"

import ProductsList from "./products_list"

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  render() {
    const {products} = this.state

    return (
      <div className="product">
        <ProductsList
          products={products}
        />
      </div>
    );
  }
}
