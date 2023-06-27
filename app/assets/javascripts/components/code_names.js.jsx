var CodeNames = createReactClass({

  render: function() {
    const exampleCardData =
    [
      {
        word: 'hello',
        colour: 'red',
        revealed: false
      },
      {
        word: 'more word',
        colour: 'blue',
        revealed: true
      },
      {
        word: 'more word',
        colour: 'blue',
        revealed: false
      },
      {
        word: 'more word',
        colour: 'red',
        revealed: false
      },
      {
        word: 'more word',
        colour: 'red',
        revealed: true
      }
    ]

    const player = {
      role: 'operator',
      team: 'blue'
    }



    return (
      <React.Fragment>
        {
          exampleCardData.map((card, i) => (
            <Card key={i} player={player} cardData={card} />
          ))
        }
      </React.Fragment>
    );
  }
});

