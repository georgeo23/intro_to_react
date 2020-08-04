import React from 'react'

class Button extends React.Component {


  state =
    {
      liked: "like"
    }

  likeButton = e => {
      e.preventDefault()
      if (this.state.liked == "like") {
        this.setState({liked: "liked"})
      } else {
        this.setState({liked: "like"})
      }
    }

  render() {
    return <button onClick={this.likeButton}>{this.state.liked}</button>
  }

}
export default Button
