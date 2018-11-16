describe("Initial pagination load", function() {
  it("Successfully loads the initial 5 Pokémon", function() {
    cy.get(".PokemonItem").should("have.length", 5);
  });
});

describe("Initial pagination load and load more once", function() {
  it("Successfully loads 5 more Pokémon on LoadButton click", function() {
    cy.get(".PokemonItem").should("have.length", 5);
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 10);
  });
});

describe("Add water type filter after loading Pokémon 3 times", function() {
  it("Successfully applies water type filter after loading 15 Pokémon", function() {
    //Loadbutton 3 times to load 15 Pokémon
    cy.get(".PokemonItem").should("have.length", 5);
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 10);
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 15);
    //Select water type filter
    cy.get("#water").check();
    cy.get(".PokemonItem").should("have.length", 3);
  });
});

describe("Loads all [type] Pokémon on application of [type] filter after 0 initial LoadButton presses", function() {
  it("Client successfully loads only water type Pokémon when filter is applied", function() {
    cy.get("#water").check();
    cy.get(".PokemonItem").each($div => {
      expect($div).to.contain("water");
    });
  });
  it("Client successfully loads only fire type Pokémon when filter is applied", function() {
    cy.get("#fire").check();
    cy.get(".PokemonItem").each($div => {
      expect($div).to.contain("fire");
    });
  });
});

describe("Remember number of Pokémon previously loaded for every sorting type", function() {
  it("Remember amount of shown Pokémon for each sorting method", function() {
    //Load 15 Pokémon for number sort
    cy.get(".LoadButton").click();
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 15);
    //Switches to alphabetical sorting
    cy.get("#alphabetical").click();
    cy.get(".PokemonItem").should("have.length", 5);
    //Switch back to number sort; verify that the app shows 15 Pokémon
    cy.get("#pokemonnumber").click();
    cy.get(".PokemonItem").should("have.length", 15);
  });
});

describe("Sort works on the entire set of Pokémon", function() {
  it("Loads Blastoise as one of the first Pokémon for alphabetical ordering", function() {
    cy.get("#alphabetical").click();
    cy.get(".PokemonItem").contains("Blastoise");
  });
  it("Loads Wartortle as one of the first Pokémon for reveerse alphabetical ordering", function() {
    cy.get("#reversealphabetical").click();
    cy.get(".PokemonItem").contains("Wartortle");
  });
});

describe("Stops loading new Pokémon once every Pokémon has been fetched", function() {
  it("Loads 24 Pokémon, then LoadButton does not lead to loading more Pokémon", function() {
    cy.get(".LoadButton").click();
    cy.get(".LoadButton").click();
    cy.get(".LoadButton").click();
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 24);
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 24);
  });
});

describe("No Pokémon are skipped when loading all 24 while toggling various filters", function() {
  it("Loads 20 Pokémon, then toggles water filter on and off and loads the rest", function() {
    cy.get(".LoadButton").click();
    cy.get(".LoadButton").click();
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 20);
    cy.get("#water").check();
    cy.get("#water").uncheck();
    cy.get(".LoadButton").click();
    cy.get(".PokemonItem").should("have.length", 24);
  });
});
