var CodeNames = createReactClass({
  getInitialState: function() {
    return {cards: this.props.cards, clues: this.props.clues, gameOver: false}
  },
  render: function() {
    const player = {
      role: document.getElementById('role').value,
      team: document.getElementById('team').value
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
            this.setState({cards: json.cards, clues: json.clues})
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

    const submitClue = () => {
      const clueText = document.getElementById('clue')
      fetch(`game/add_clue?clue_text=${clueText.value}&game_id=${gameId}`)
        .then(() => {
          updateGame()
        }).finally(() => {
          clueText.value = ''
        })
    }

    return (
      <React.Fragment>
        <div className="gameContainer">
          <div className="cardContainer">
            {
              this.state.cards.map((card, i) => (
                <Card key={i} onClick={cardClicked} player={player} cardData={card} />
              ))
            }
          </div>
          <div className="clueContainer">
          {
              this.state.clues.map((clue, i) => (
                <Clue key={i} player={player} clue={clue} />
              ))
            }
            {
              player.role === 'spymaster' ? (
                <div>
                  <textarea id='clue'></textarea>
                  <div onClick={submitClue}>Submit clue</div>
                </div>
              ) : <div></div>
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
});

