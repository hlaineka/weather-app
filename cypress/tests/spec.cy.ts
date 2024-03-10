describe('open the page', () => {
  it('renders all cities', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.current-weather-espoo').contains('Espoo');
    cy.get('.current-weather-jyvaskyla').contains('Jyväskylä');
    cy.get('.current-weather-kuopio').contains('Kuopio');
    cy.get('.current-weather-tampere').contains('Tampere');
  });
});

describe('Changes the city', () => {
  it('renders selected city', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.dropdown-menu button').click();
    cy.get('#cities_element_espoo').click();
    cy.get('.dropdown-menu button').contains('Espoo');
    cy.get('.current-weather-espoo').contains('Espoo');
    cy.get('.current-weather-jyvaskyla').should('not.exist');
    cy.get('.current-weather-kuopio').should('not.exist');
    cy.get('.current-weather-tampere').should('not.exist');
  });
});
