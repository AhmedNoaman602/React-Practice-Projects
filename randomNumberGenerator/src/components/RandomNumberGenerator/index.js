import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  randomNumber = () => {
    const newNum = Math.floor(Math.random() * 100)
    this.setState({
      number: newNum,
    })
  }

  render() {
    const {number} = this.state

    return (
      <div className="random-no-generator-app-container">
        <div className="random-no-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.randomNumber}
          >
            Generate
          </button>
          <h1 className="random-number">{number}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
