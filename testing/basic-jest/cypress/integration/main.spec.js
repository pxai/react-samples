describe.only('Main Content', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('cy.document() - get the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  });

  it('has a page title', () => {
    cy.title().should('include', 'React App')
  });

  it('shows Header title', () => {
    cy.get("h1.App-title").should('have.text', 'Task List')
  });
});