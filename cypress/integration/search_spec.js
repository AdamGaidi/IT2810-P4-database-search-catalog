describe("Search pikachu", () => {
  it("Succesfully searches and retrieves pikachu", () => {
    // Search for Pikachu in the input field
    cy.get(".SearchForm__search-bar-input")
      .type("Pikachu")
      .should("have.value", "Pikachu");
    // Check that the search result is in fact Pikachu
    cy.get(".PokemonItem").contains("Pikachu");
    // Check that pikachu is of type electric
    cy.get(".PokemonItem").contains("electric");
    // Check that Bulbasaur is not in the result list
    cy.get(".PokemonItem")
      .contains("Bulbasaur")
      .should("not.exist");
  });
});
