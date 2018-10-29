import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Pokemon from "./components/Pokemon";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <header>
          <h1>Pokédex</h1>
          <span>Add more header info here if needed</span>
        </header>
        <main>
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
      </ApolloProvider>
    );
  }
}

export default App;
