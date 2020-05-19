import React from "react"
import ReactDOM from 'react-dom'

export default class Quantity extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.batchesProductId);
    this.handlePlus = this.handlePlus.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.state = {
      quantity: this.props.personalQuantity,
    }
  }

  handlePlus(event) {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
    {/*updateQuantityOnBackend(this.state.quantity)*/}
  }

  handleMinus(event) {
    if (this.state.quantity > 0) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1
      }))
    }
    {/*updateQuantityOnBackend(this.state.quantity)*/}
  }

  {/*
    по какой ссылке нам отправлять запрос обновления quantity?
    updateQuantityOnBackend(quantity) {
    const batchesProductId = this.props.batchesProductId
    const url = ?
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({quantity: quantity})
    })
    .then(res => {
      return res.json()
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error)
    })
  }
  */}

  render() {
    return (
      <>
        <span onClick={this.handleMinus} className='decrease_quantity'>-</span>
        <span className='quantity_value'>{this.state.quantity}</span>
        <span onClick={this.handlePlus} className='increase_quantity'>+</span>
      </>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.getElementsByClassName('react_card')
  const cardsArr = Array.from(cards);

  const quantityCollection = document.getElementsByClassName('react_quantity')
  const quantityArr = Array.from(quantityCollection).map(quantity => parseInt(quantity.dataset.batch_product_quantity) || 0)

  const batchesProductsIdsArr = Array.from(quantityCollection).map(quantity => quantity.dataset.batch_product_id)

  cardsArr.map((card, index) => {
    ReactDOM.render(<Quantity personalQuantity={quantityArr[index]} batchesProductId={batchesProductsIdsArr[index]}/>, card)
  })
})
