import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { exampleAction } from "actions/exampleAction";

import Pokemon from "containers/Pokemon";

class App extends Component {
  exampleFunction() {
    this.props.exampleAction();
  }

  render() {
    this.exampleFunction();
    return (
      <>
        <header>
          <h1>Pokédex</h1>
          <span>Add more header info here if needed</span>
        </header>
        <main>
          <p>
            Hello redux:
            {this.props.examplePropOne} {this.props.examplePropTwo}
          </p>
          Fetched from GraphQL endpoint:
          <Pokemon />
        </main>
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
