import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {
    count: 0,
  }

  phraseCalculator = event => {
    const lengthOfPhrase = event.target.value.length

    this.setState({
      count: lengthOfPhrase,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label">
              Enter the phrase
              <div className="form-container">
                <input
                  className="letters-input"
                  type="text"
                  placeholder="Enter the phrase"
                  onChange={this.phraseCalculator}
                />
              </div>
            </label>
            <div className="letters-count">No.of letters: {count}</div>
          </div>
          <div className="image-section">
            <img
              className="letters-calculator-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LetterCalculator
