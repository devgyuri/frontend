describe("cypress e2e test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/section33/33-06-cypress-e2e-test");
    cy.get("button").click();
    cy.get("div").contains("Hello kitty!");
  });
});
