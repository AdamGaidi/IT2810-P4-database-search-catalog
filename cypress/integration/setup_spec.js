describe("Pokedex", () => {
  it("successfully loads", () => {
    // Assert that we are in the search engine
    cy.contains("Pokédex Search Engine");
  });
});
