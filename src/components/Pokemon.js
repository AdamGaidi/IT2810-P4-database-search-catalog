import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Pokemon = () => (
  <Query
    query={gql`
      {
        pokemon {
          name
          type
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error :(</p>;

      return data.pokemon.map(({ name, type }) => (
        <div key={`${name}${type}`}>
          <p>{`${name} : ${type}`}</p>
        </div>
      ));
    }}
  </Query>
);
export default Pokemon;
