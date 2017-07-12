'use babel'
import React from 'react'
import ReactDOM from 'react-dom'

class Application extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      valueA: 0,
      valueB: 0
    }
  }

  render () {
    const ranid = Math.random().toString(16).slice(2)
    return <form>
      <div>
        <input type="number" value={this.state.valueA} onChange={this.handleChange('A')} />
        <input type="number" value={this.state.valueB} onChange={this.handleChange('B')} />
      </div>
      <div>
        <label for={ranid}>Output: </label>
        <output id={ranid}>{this.state.valueA + this.state.valueB}</output>
      </div>
    </form>
  }
  
  handleChange (name) {
    return event =>
      this.setState({['value' + name]: Number(event.target.value) || 0})
  }
}

ReactDOM.render(<Application />, document.getElementById('root'))