describe("Incrementor", () => {
  it("Should increase the count when the increment button is pressed", () => {
    cy.visit("http://localhost:5173/");
    cy.findByRole("button", { name: "Increment" }).click();
    cy.findByRole("current-count").contains("Count is 1");
  });

  it("Should set the count to zero when the reset button is pressed", () => {
    cy.visit("http://localhost:5173/");
    cy.findByRole("button", { name: "Reset" }).click();
    cy.findByRole("current-count").contains("Count is 0");
  });
});

export {};
