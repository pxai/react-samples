describe.only('Task management', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has data', () => {
    cy.get('.Task-data').eq(0).should('have.text','1 - Just do');
  });

  it('has links', () => {
    cy.get('.Task-controls a').eq(0).should('have.text','Update');
    cy.get('.Task-controls a').eq(1).should('have.text','Delete');
  });

  it('deletes task', () => {
    cy.get('.Task-data').eq(0).should('have.text','1 - Just do');
    cy.get('.Task-controls a').eq(1).click();
    cy.get('.Task-data').eq(0).should('not.have.text','1 - Just do');
  });

  it('toggles update form', () => {
    cy.get('.Task .Form').should('not.exist');
    cy.get('.Task-controls a').eq(0).click();
    cy.get('.Task .Form').should('exist');

    cy.get('.Task-controls a').eq(0).click();
    cy.get('.Task .Form').should('not.exist');
  });

  it('does not update if form empty', () => {
    cy.get('.Task-controls a').eq(0).click();

    cy.get('.Task .Form input[type=text]').clear();
    cy.get('.Task .Form input[type=button]').click();

    cy.get('.Task .Form').should('exist');
  });

  it('should update task', () => {
    cy.get('.Task-data').eq(0).should('have.text','1 - Just do');
    cy.get('.Task-controls a').eq(0).click();

    cy.get('.Task .Form input[type=text]').clear().type('Change task');
    cy.get('.Task .Form input[type=button]').click();
    
    cy.get('.Task-data').eq(0).should('have.text','1 - Change task');
    cy.get('.Task .Form').should('not.exist');
  });
});