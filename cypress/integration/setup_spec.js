describe("Pokedex", () => {
  it("successfully loads", () => {
    // Visit base url
    cy.visit("/");
    // Assert that we are in the search engine
    cy.contains("Pokédex Search Engine");
  });
});
