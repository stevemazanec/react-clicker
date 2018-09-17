import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

let correctGuesses = 0;
let bestScore = 0;

class App extends Component {

  // Setting this.state.characters to the characters json array
  state = {
    characters,
    correctGuesses,
    bestScore,
  };

  setClicked = id => {

    // Make a copy of the state characters array to work with
    const characters = this.state.characters;
    // Filter for the clicked card
    const cardClicked = characters.filter(character => character.id === id);
    // If the card's image's clicked value is already true, 
    // do the game over actions
    if (cardClicked[0].clicked) {

      correctGuesses = 0;

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      this.setState({ correctGuesses });
      this.setState({ characters });

      // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 14) {

      // Set its value to true
      cardClicked[0].clicked = true;

      // increment the appropriate counter
      correctGuesses++;

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      // Shuffle the array to be rendered in a random order
      characters.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.characters equal to the new characters array
      this.setState({ characters });
      this.setState({ correctGuesses });
    } else {

      // Set its value to true
      cardClicked[0].clicked = true;

      // restart the guess counter
      correctGuesses = 0;


      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      // Shuffle the array to be rendered in a random order
      characters.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.characters equal to the new characters array
      this.setState({ characters });
      this.setState({ correctGuesses });

    }
  };


  render() {
    return (
      <div>
        <Navbar correctGuesses={this.state.correctGuesses} bestscore={this.state.bestScore} />
        <Header />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              setClicked={this.setClicked}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;
