import { filterPokemonType } from "../schema";
import { testPokemonCollection } from "../testData/mockData";

const expectedResultAfterFiltering = [
  {
    number: "001",
    name: "Bulbasaur",
    stars: 0,
    img: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    __typename: "Pokemon",
    id: "cjo8hbp8f001a0791mj8w5ukp",
    types: ["grass", "poison"]
  },
  {
    number: "002",
    name: "Ivysaur",
    stars: 0,
    img: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    __typename: "Pokemon",
    id: "cjo8hbp8h001e07912foqx9n4",
    types: ["grass", "poison"]
  },
  {
    number: "003",
    name: "Venusaur",
    stars: 1,
    img: "https://img.pokemondb.net/artwork/venusaur.jpg",
    __typename: "Pokemon",
    id: "cjo8hbp8i001g07915ico1t0f",
    types: ["grass", "poison"]
  }
];

test("filter pokémon on type 'grass'", () => {
  var filteredPokemon = filterPokemonType(testPokemonCollection, ["grass"]);
  expect(filteredPokemon).toEqual(expectedResultAfterFiltering);
});
