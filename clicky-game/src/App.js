import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import ppg from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.ppg to the cards json array
  state = {
    ppg,
    clickedPPGIds: [],
    score: 0,
    goal: 8,
    status: "",
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = (id) => {
    let clickedPPGIds = this.state.clickedPPGIds;

    if (clickedPPGIds.includes(id)) {
      this.setState({
        clickedPPGIds: [],
        score: 0,
        status: "Game Over! You lost. Click to play again!",
      });
      return;
    } else {
      clickedPPGIds.push(id);

      if (clickedPPGIds.length === 8) {
        this.setState({
          score: 8,
          status: "You Won! Great Job, Smartie! Click to play again!",
          clickedPPGIds: [],
        });
        console.log("You Win");
        return;
      }

      this.setState({
        ppg,
        clickedPPGIds,
        score: clickedPPGIds.length,
        status: " ",
      });

      for (let i = ppg.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ppg[i], ppg[j]] = [ppg[j], ppg[i]];
      }
    }
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-intro">Try not to click the same image twice!</p>
        </header>
        <Score total={this.state.score} goal={8} status={this.state.status} />
        <Wrapper>
          {this.state.ppg.map((puppy) => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;