var CodeNames = createReactClass({

  render: function() {
    
    // DELETE ME vv
    const exampleCardData = []

    for (let i = 0; i < 25; i++) {
      exampleCardData.push(
        {
          word: 'hello',
          colour: i%2 + Math.floor(Math.random() * 2) === 0 ? 'red' : 'blue',
          revealed: i%2 + Math.floor(Math.random() * 2) === 0
        }
      )
    }

    const player = {
      role: 'operator',
      team: 'blue'
    }
    // DELETE ME ^^

    return (
      <React.Fragment>
        <div className="grid">
          {
            exampleCardData.map((card, i) => (
              <Card key={i} player={player} cardData={card} />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
});

