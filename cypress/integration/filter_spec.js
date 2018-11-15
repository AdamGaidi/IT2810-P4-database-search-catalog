describe("Filter pokemon", () => {
  it("Succesfully filters pokemon by type Grass", () => {
    // Check the checkbox of id=Grass
    cy.get("#grass").check();
    // Check that all pokemonItems contains grass
    cy.get(".PokemonItem").each($div => {
      expect($div).to.contain("grass");
    });
  });
});
