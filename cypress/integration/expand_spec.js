describe("Expand pokemon", () => {
  it("Succesfully expands to a detailed view", () => {
    // Gets the show more button of first element
    // Press the button and check that we can access base stats
    cy.get(".PokemonItem__show-more")
      .first()
      .click();
    cy.get(".PokemonDetailItem").contains("Base stats")
  });
});
