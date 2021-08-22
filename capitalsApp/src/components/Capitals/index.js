import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryId: countryAndCapitalsList[0].id,
  }

  renderOption = each => (
    <option key={each.id} value={each.id}>
      {each.capitalDisplayText}
    </option>
  )

  onChangeAttribute = event => {
    this.setState({
      countryId: event.target.value,
    })
  }

  getCountry = () => {
    const {countryId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === countryId,
    )
    return activeCountry.country
  }

  render() {
    const {countryId} = this.state
    const getAnswer = this.getCountry(countryId)
    return (
      <div className="capitals-app-container ">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container ">
            <select
              onChange={this.onChangeAttribute}
              className="capital-select "
            >
              {countryAndCapitalsList.map(each => this.renderOption(each))}
            </select>
            <h1 className="question">is the capital of which Country?</h1>
          </div>
          <h1 className="country">{getAnswer}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
