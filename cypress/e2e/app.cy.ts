describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Renders correctly', () => {
    cy.get('h1').contains('Christian Planck');
    cy.get('p').contains('freelance web developer');
  });

  it('Links correctly', () => {
    cy.get('a')
      .contains("Let's connect")
      .should('have.attr', 'href', 'https://www.linkedin.com/in/chrplanck/');

    cy.get('a')
      .contains('27 28 25 00')
      .should('have.attr', 'href', 'tel:27282500');

    cy.get('a')
      .contains('Write me')
      .should('have.attr', 'href', 'mailto:christian@planck.works');
  });
});

export {};
