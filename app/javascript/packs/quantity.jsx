import React from "react"
import ReactDOM from 'react-dom'
export default class Whatever extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
  }

  render() {
    return (
      <div> попа
      <div/>
     )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Whatever/>, document.getElementById('react_quantity'))
})
