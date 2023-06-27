var Clue = createReactClass({

  render: function() {
    const clue = this.props.clue
    const { role, team } = this.props.player

    return (
      <React.Fragment>
        <div className="clueLine">
          <div className="clueText">
            {clue}
          </div>
        </div>
      </React.Fragment>
    );
  }
});

