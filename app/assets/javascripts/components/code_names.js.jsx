var CodeNames = createReactClass({
  getInitialState: function() {
    return {cards: this.props.cards}
  },
  render: function() {
    const player = {
      role: 'operator',
      team: 'blue'
    }
    const gameId = this.props.game_id

    const cardClicked = (word) => {
      fetch(`game/progress_game?game_id=${gameId}&card_word=${word}`)
        .then((data) => {
          data.json().then((json) => {
            this.setState({cards: json.cards})
          })
        })
    }

    const updateGame = () => {
      fetch(`game/update_game?game_id=${gameId}`)
        .then((data) => {
          data.json().then((json) => {
            this.setState({cards: json.cards})
          })
        })
    }

    setTimeout(updateGame, 1000);


    return (
      <React.Fragment>
        <div className="grid">
          {
            this.state.cards.map((card, i) => (
              <Card key={i} onClick={cardClicked} player={player} cardData={card} />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
});

