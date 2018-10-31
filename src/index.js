import React from "react";
import ReactDOM from "react-dom";

// Imports for using graphql through Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Imports for Redux
import { createStore } from "redux";
import rootReducer from "reducers";
import { Provider } from "react-redux";

import "./index.css";
import "./constants.css";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const store = createStore(
  rootReducer,
  // To enable the usage of Redux DevTools in Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
