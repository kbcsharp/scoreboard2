import React from "react";
import Header from "./Header";
import Player from "./Player";

class App extends React.Component {
  state = {
    players: [
      {
        name: "Kent",
        score: 0,
        id: 1
      },
      {
        name: "Drew",
        score: 0,
        id: 2
      },
      {
        name: "Austin",
        score: 0,
        id: 3
      },
      {
        name: "Aaron",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
