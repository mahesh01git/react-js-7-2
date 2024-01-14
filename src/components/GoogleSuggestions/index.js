// Write your code here

import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearch = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const resultList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-con">
        <div className="content-con">
          <div className="img-con">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
            />
          </div>
          <div className="search-con">
            <div className="input-con">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </div>
            <ul className="ul-con">
              {resultList.map(eachItem => (
                <SuggestionItem key={eachItem.id} details={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
