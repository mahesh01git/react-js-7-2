// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {details, updatedInput} = props
  const {suggestion} = details

  const updateInputValue = () => {
    updatedInput(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-text">{suggestion}</p>
      <button onClick={updateInputValue} className="button" type="button">
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
