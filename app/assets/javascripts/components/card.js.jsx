var Card = createReactClass({

  render: function() {
    const { colour, revealed, word } = this.props.cardData
    const { role, team } = this.props.player
    const cardColour = () => {
      if (revealed || role === 'spymaster') {
        return colour
      } else {
        return 'grey'
      }
    }

    const borderCardColour = () => {
      if (revealed || role === 'spymaster') {
        if (colour === "red") {
          return "maroon"
        }
        else if (colour === "blue") {
          return "aqua"
        }
        else {
          return "grey"
        }
      } else {
        return 'grey'
      }
    }

    return (
      <React.Fragment>
        <div
          className='card'
          style={{backgroundColor: cardColour()}}
          onClick={() => this.props.onClick(word)}
          >
          <div className='card-upper'>
          </div>
          <div className='card-word'>
            <p style={{margin: 0}}>
              {word.toUpperCase()}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
});

