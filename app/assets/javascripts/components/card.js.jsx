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

    return (
      <React.Fragment>
        <div className='card' style={{backgroundColor: cardColour()}}>
          <div className='card-word'>
            {word.toUpperCase()}
          </div>
        </div>
      </React.Fragment>
    );
  }
});

