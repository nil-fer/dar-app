import React from "react"
import PropTypes from "prop-types"

import ProductPopup from './product_popup'

class ProductsList extends React.Component {
	constructor(props) {
		super(props);

		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
		// this.handleClick = this.handleClick.bind(this)

		this.state = {
			productShow: false,
			activeProduct: ''
		};
	}

	// handleClick = id => {
	// 	let newState = this.state
	// 	newState.activeProduct = id
	//
	// 	this.setState({newState});
	// };

	showModal = (id) => {
		this.setState({activeProduct: id});
		this.setState({productShow: true});
	};

	hideModal = () => {
		this.setState({productShow: false});
	};

	productsList() {
		const products = this.props.products

		return products.map((product, index) => <div className="product_card" key={index} onClick={() => this.showModal(product.id)}>
			<div className='cover'></div>
			<div className='product_card_info' onClick={this.showModal}>
				<div className='details'>
					<h4>{product.name}</h4>
					<h3>приввв</h3>
				</div>
			</div>
		</div>);
	}

	render() {
		const {products} = this.props
		const {activeProduct} = this.state
		const findActiveProduct = products.find(product => product.id === activeProduct);

		return <div>
			{this.productsList()}
			{
				(activeProduct !== '')
					? <ProductPopup productShow={this.state.productShow} handleClose={this.hideModal}>
							{findActiveProduct.name}
						</ProductPopup>
					: <div></div>
			}
		</div>
	}
}

export default ProductsList
