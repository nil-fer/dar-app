import React from "react"
import ReactDOM from 'react-dom'
export default class Quantity extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
  }

  render() {
    return (
      <div> попа
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello')
  ReactDOM.render(<Quantity/>, document.getElementById('react_quantity'))
})
