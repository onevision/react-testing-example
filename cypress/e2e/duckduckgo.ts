import { DataTable, Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and(
      "match",
      /Search the web without being tracked|Search without being tracked/
    );

  assert.deepEqual({}, {});
});

When("I search for dogs", () => {
  cy.get("input[type=text]").type("dog");
  cy.findByRole("button", { name: "Search" }).click();
});

Then("I should see results about dogs", () => {
  cy.get(".react-results--main").contains("Dog");
});

Then("I perform a search", (dataTable: DataTable) => {
  dataTable.hashes().forEach((element) => {
    cy.visit("https://duckduckgo.com/");
    cy.get("input[type=text]").last().clear();
    cy.get("input[type=text]").last().type(element.searchText);
    cy.findByRole("button", { name: "Search" }).click();
    cy.get(".react-results--main").contains(element.searchText);
  });
});
