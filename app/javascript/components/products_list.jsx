import React from 'react';

import ProductPopup from './product_popup';

class ProductsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productShow: false,
			activeProductId: null,
		};
	}

	showModal = (id) => {
		this.setState({ activeProductId: id });
		this.setState({ productShow: true });
	};

	hideModal = () => {
		this.setState({ productShow: false });
	};

	discountSum = (price) => {
		const { discount } = this.props;
		return (price * discount) / 100;
	};

	productsList() {
		const { products, discount } = this.props;

		return products.map((product, index) => (
			<div className="product_card" key={index} onClick={() => this.showModal(product.id)}>
				<div className="cover">{product.product_pic && <img src={product.product_pic.url} />}</div>
				<div className="product_card_info" onClick={this.showModal}>
					<div className="details">
						<h4>{product.name}</h4>
						<h3 className="disabled_price">{product.price} &#8381;</h3>
						{product.price && discount && (
							<h3 className="discount_price">
								{product.price - this.discountSum(product.price)} &#8381;
							</h3>
						)}
						<p className="dark_grey">
							Цена за порцию / {product.weight_amount} {product.weight_type}
						</p>
						<div className="button_book button">Забронировать товар</div>
					</div>
				</div>
			</div>
		));
	}

	render() {
		const { products } = this.props;
		const { activeProductId } = this.state;
		const activeProduct = products.find((product) => product.id === activeProductId);

		if (activeProduct) {
			activeProduct.discountPrice = activeProduct.price - this.discountSum(activeProduct.price);
		}

		return (
			<div className="batch_block_cards">
				{this.productsList()}
				{activeProduct && (
					<ProductPopup
						productShow={this.state.productShow}
						handleClose={this.hideModal}
						product={activeProduct}
					></ProductPopup>
				)}
			</div>
		);
	}
}

export default ProductsList;
