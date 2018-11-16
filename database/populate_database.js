const fetch = require("node-fetch");
const pokemon = require("./pokemon.js");

var mutation = `mutation CreatePokemon(
  $name: String!
  $number: String!
  $stars: Int!
  $attack: Int!
  $defense: Int!
  $HP: Int!
  $sp_atk: Int!
  $sp_def: Int!
  $speed: Int!
  $img: String!
  $types: [Type!]!
) {
  createPokemon(
    name: $name
    number: $number
    stars: $stars
    attack: $attack
    defense: $defense
    HP: $HP
    sp_atk: $sp_atk
    sp_def: $sp_def
    speed: $speed
    img: $img
    types: $types
  ) {
    id
    name
  }
}

`;
pokemon.forEach(p => {
  fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: mutation,
      variables: p
    })
  })
    .then(r => r.json())
    .then(data => console.log("data returned:", data));
});
