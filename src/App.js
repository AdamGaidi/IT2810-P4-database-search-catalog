import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SearchForm from "containers/SearchForm";
import Pokemon from "containers/Pokemon";
import LoadButton from "components/LoadButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App__header">
            <h1 className="App__title">A Pokédex Search Engine</h1>
          </header>

          <main className="App__main-content">
            <SearchForm />
            <div className="App__results">
              You got {this.props.numResults} result
              {this.props.numResults === 1 ? "" : "s"}
            </div>
            <Pokemon />
            <LoadButton />
          </main>
        </div>
        <footer className="App__footer">
          <div className="App__footer-content ">
            <p>
              Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company
              2001-2018. All images and names owned and trademarked by
              Gamefreak, Nintendo, The Pokémon Company, and Niantic are property
              of their respective owners.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    numResults: state.countPokemonResults.numPokemonResults
  };
};

export default connect(mapStateToProps)(App);
