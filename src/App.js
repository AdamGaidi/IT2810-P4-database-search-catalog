import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { exampleAction } from "actions/exampleAction";

import SearchForm from "containers/SearchForm";
import Pokemon from "containers/Pokemon";
import LoadButton from "components/LoadButton";

import "./App.css";

class App extends Component {
  exampleFunction() {
    this.props.exampleAction();
  }

  render() {
    this.exampleFunction();
    return (
      <div className="App">
        <div>
          <header className="App__header">
            <h1 className="App__title">A Pokédex Search Engine</h1>
          </header>

          <main className="App__main-content">
            <SearchForm />
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
// These properties will be accessible on this component’s props.
// This way, any changes made to examplePropOne, even if from
// another component, will flow through and be rendered in this
// component. You don’t have to pick out all the properties from
// the state object in your mapStateToProps function — only bring
// in the ones your component cares about!
const mapStateToProps = state => {
  return {
    examplePropOne: state.test2.examplePropOne,
    examplePropTwo: state.test2.examplePropTwo
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ exampleAction }, dispatch);
};

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
