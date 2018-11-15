describe("Sort pokemon", () => {
  it("Succesfully sorts pokemon based by popularity", () => {
    // Sort by popularity
    let stars = Infinity.toString();
    cy.get("#popularity").check();
    // Check that each element has at most as many stars as the one above
    cy.get(".PokemonItem__stars").each($div => {
      expect($div.text()).to.be.at.most(stars);
      stars = $div.text();
    });
  });
});
