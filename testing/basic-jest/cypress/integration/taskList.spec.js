describe.only('Task List', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a title', () => {
    cy.get('p.App-intro').should('have.text', 'Here is your list');
  });

  it('shows task number', () => {
    cy.get('h3').should('have.text', 'Tasks: 2');
  });

  it('has Task Data components for each task', () => {
    cy.get('div.Task-data').should('have.length', 2);
  });

  it('have a link to add tasks', () => {
    cy.get('a:last').should('have.text', 'Add Task');
  });
});