import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Pokédex</h1>
          <span>Add more header info here if needed</span>
        </header>
        <main>Add pokedex functionality here.</main>
        <footer>
          <p>
            Add any footer info here if needed, like where the dataset is from
            and link to gitlab.
          </p>
          <p>
            Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company
            2001-2018. All images and names owned and trademarked by Gamefreak,
            Nintendo, The Pokémon Company, and Niantic are property of their
            respective owners.
          </p>
        </footer>
      </>
    );
  }
}

export default App;
