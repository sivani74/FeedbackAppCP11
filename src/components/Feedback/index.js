// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="emoji-btn"
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-icon"
                />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-icon" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer service performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="app-container">
        {isFeedbackSelected
          ? this.renderThankYouScreen()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
