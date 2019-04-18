describe.only('Add Task List', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('toggles form on clicking add task', () => {
    cy.get('a:last').click();
    cy.get('div.Form').should('exist');

    cy.get('a:last').click();
    cy.get('div.Form').should('not.exist');
  });
  
  it('stays visible when just clicking the button', () => {
    cy.get('a:last').click();

    cy.get('.Form input[type=button]').click();
    cy.get('div.Form').should('exist');
  });

  it('stays visible when input empty and clicking the button', () => {
    cy.get('a:last').click();

    cy.get('.Form input[type=text]').type(' ');
    cy.get('.Form input[type=button]').click();
    cy.get('div.Form').should('exist');
  });

  it('disappears after filling up form', () => {
    cy.get('a:last').click();
    cy.get('.Form input[type=text]').type('Do exercise');
    cy.get('.Form input[type=button]').click();
    cy.get('div.Form').should('not.exist');
  });

  it('Adds new task when writing text and clicking the button', () => {
    cy.get('div.Task').should('have.length', 2);
    cy.get('a:last').click();
    cy.get('.Form input[type=text]').type('Do exercise');
    cy.get('.Form input[type=button]').click();

    cy.get('div.Task').should('have.length', 3);
    cy.get('div.Task-data').eq(2).should( 
      elem => expect(elem.text()).to.match(/Do exercise/)
    );
  });
});