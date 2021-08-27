import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  ondropDown = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  onDisable = () => {
    const imgUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    return (
      <button type="button" className="button">
        <img
          alt="minus"
          src={imgUrl}
          className="image"
          onClick={this.ondropDown}
        />
      </button>
    )
  }

  onActive = () => {
    const imgUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <button type="button" className="button">
        <img
          alt="plus"
          src={imgUrl}
          className="image"
          onClick={this.ondropDown}
        />
      </button>
    )
  }

  showAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    return (
      <div>
        <hr className="horizontal-line" />
        <p className="answer">{answerText}</p>
      </div>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isActive} = this.state

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {isActive ? this.onDisable() : this.onActive()}
        </div>
        {isActive && this.showAnswer()}
      </li>
    )
  }
}
export default FaqItem
