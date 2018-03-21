import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    currentScore : 0,
    topScore : 0,
    message : "Click a character to begin!"
  };

  componentDidMount() {
    this.setState();
  }

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
    if (this.state.currentScore + 1 === this.state.cards.length) {
      this.setState({ message: "YOU WIN!!" });
    } 
    else {
      this.setState({ message: "You picked correctly!"});
    }
    
  };

  //Card has been clicked
  beenClicked = (id) => {
    cards.filter(card => {
      if (card.id === id) {
        card.clicked = true;
        this.setState({ cards });
      }
    });

  };
  //check current score against top score
  handleTopScore = () => {
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
  };

  // handleWin = () => {
  //   if (this.state.currentScore === this.state.cards.length) {
  //     this.setState({ message: "YOU WIN!!" });
  //   }
  // };

  //resets the game to default
  handleReset = () => {
    cards.forEach(card => {
      card.clicked = false;
    });
    this.setState({ currentScore: 0 });
    this.setState({ message: "You lost :(" });
    this.setState({ cards });
  };

  //randomize mapping order
  shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    return (
      <div>
      <Nav 
        currentScore = {this.state.currentScore}
        topScore = {this.state.topScore}
        message = {this.state.message}
      />
      <Wrapper>
          <div className="instructions">Win by Selecting All Characters Once</div>
        <Title>Clicky Game</Title>
          {this.shuffleCards(this.state.cards).map(card => (
          <Card
            beenClicked={this.beenClicked}
            handleReset={this.handleReset}
            handleTopScore={this.handleTopScore}
            handleIncrement={this.handleIncrement}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
