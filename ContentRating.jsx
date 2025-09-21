import React, { Component } from 'react';
import './ContentRating.css';  // <-- import the CSS

class ContentRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0
    };
  }

  handleLike = () => {
    this.setState((prev) => ({ likes: prev.likes + 1 }));
  }

  handleDislike = () => {
    this.setState((prev) => ({ dislikes: prev.dislikes + 1 }));
  }

  render() {
    return (
      <div className="content-rating">
        <p>
          Social media has changed the way we connect with people around the world,
          making communication faster and more interactive.
        </p>

        <div className="rating-buttons">
          <button onClick={this.handleLike} className="like-btn">
            Like ({this.state.likes})
          </button>

          <button onClick={this.handleDislike} className="dislike-btn">
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
