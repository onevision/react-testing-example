import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the SKKN skincare page", () => {
  cy.visit("https://skknbykim.com/en-gb/collections/skincare");
  cy.wait(5000);
  cy.findByRole("button", { name: "Accept All Cookies" }).click();
  cy.wait(5000);
  cy.findByRole("button", { name: "Close" }).click();

  cy.document().then((document): void => {
    const productTiles = document.querySelectorAll(".product-tile");
    for (let i = 0; i < productTiles.length; i++) {
      const singlePill = productTiles[i].querySelector(".option--pill");

      if (!singlePill) {
        console.log("No Pill.");
      } else if (singlePill.classList.contains("option--disabled")) {
        console.log("Pill disabled");
      } else {
        console.log("Pill exists");
        cy.wrap(singlePill).click({ force: true });
        cy.wait(1000);
        cy.wrap(productTiles[i]).click();
        break;
      }
    }
  });
});
