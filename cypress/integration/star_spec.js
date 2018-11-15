describe("Star pokemon", () => {
  it("Succesfully increases pokemon rating when starred", () => {
    // Gets the stars of first element
    // Press the star, and check that the number has increased
    cy.get(".PokemonItem__stars")
      .first()
      .then($div => {
        const stars = $div.text();
        cy.get(".PokemonItem__stars")
          .first()
          .click()
          .should($div2 => {
            expect($div2.text()).to.be.greaterThan(stars);
          });

        // Press the button again to unstar and check that the number is the same
        cy.get(".PokemonItem__stars")
          .first()
          .click()
          .should($div3 => {
            expect($div3.text()).to.be.eq(stars);
          });
      });
  });
});
