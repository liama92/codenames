var CodeNames = createReactClass({
  getInitialState: function() {
    return {cards: this.props.cards, gameOver: false}
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
            checkEndGame()
          })
        })
    }
    if (!this.state.gameOver) setTimeout(updateGame, 1000);


    const checkEndGame = () => {
      if (!this.state.gameOver) {
        const redCards = this.state.cards.filter((c) => c.colour === 'red')
        const blueCards = this.state.cards.filter((c) => c.colour === 'blue')
        if (redCards.every((c) => c.revealed)) {
          window.alert('red has won')
          this.setState({gameOver: true})
  
        } else if (blueCards.every((c) => c.revealed)) {
          window.alert('blue has won')
          this.setState({gameOver: true})
  
        }
      }
    }

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

