import { pagination } from "../schema";
import { testPokemonCollection } from "../testData/mockData";

const expectedResultAfterPagination = [
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
  },
  {
    number: "004",
    name: "Charmander",
    stars: 0,
    img: "https://img.pokemondb.net/artwork/charmander.jpg",
    __typename: "Pokemon",
    id: "cjo8hbp8i001h0791456eh7fq",
    types: ["fire"]
  },
  {
    number: "005",
    name: "Charmeleon",
    stars: 0,
    img: "https://img.pokemondb.net/artwork/charmeleon.jpg",
    __typename: "Pokemon",
    id: "cjo8hbp8g001b079136yi7cs0",
    types: ["fire"]
  }
];
const offset = 0;
const limit = 5;

test("Only return 5 first pokémon", () => {
  var paginatedPokemon = pagination(testPokemonCollection, offset, limit);
  expect(paginatedPokemon).toEqual(expectedResultAfterPagination);
});
