var CodeNames = createReactClass({

  render: function() {
    const player = {
      role: 'operator',
      team: 'blue'
    }

    return (
      <React.Fragment>
        <div className="grid">
          {
            this.props.cards.map((card, i) => (
              <Card key={i} player={player} cardData={card} />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
});

