describe.only("Greet", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has greet text", () => {
    cy.get("div.Greet").should("have.text", "This is a greet");
  });

  it("changes on click", () => {
    cy.get("div.Greet").should("have.text", "This is a greet");
    cy.get("div.Greet").click();
    cy.get("div.Greet").should("have.text", "I was clicked");
  });
});