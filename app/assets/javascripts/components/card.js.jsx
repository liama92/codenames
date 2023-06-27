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
    console.log('calling card colour')
    console.log(cardColour())

    return (
      <React.Fragment>
        <div className='card-outer' style={{backgroundColor: cardColour()}}>
          {word}
        </div>
      </React.Fragment>
    );
  }
});

