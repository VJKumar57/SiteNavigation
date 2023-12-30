import 'cypress-axe';
/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://vjkumar57.github.io/SiteNavigation/#');
    cy.injectAxe();
    cy.checkA11y(undefined, { retries: 20, interval: 10 });
    cy.get('a').contains('Quiz').type('{enter}');
    cy.get('a').contains('About').type('{enter}');
    cy.get('a').contains('Dashboard').type('{enter}');
    cy.get('a').contains('Home').type('{enter}');
  });

  describe('Navigation', () => {
    beforeEach(() => {
      cy.visit('https://vjkumar57.github.io/SiteNavigation/#');
    });

    it('should have correct page title', () => {
      cy.title().should('eq', "Let's Learn Accessibility");
    });

    it('should have alt text for the profile image', () => {
      cy.get('img.profile-picture')
        .should('have.attr', 'alt')
        .should('contain', 'Profile Picture');
    });

    it('should have correct lang attribute', () => {
      cy.get('html').should('have.attr', 'lang', 'en');
    });

    it('should not have keyboard trap', () => {
      cy.checkA11y(undefined, {
        rules: {
          'keyboard-trap': { enabled: true },
        },
      });
    });
  
    it('should have focus styles for interactive elements', () => {
      cy.checkA11y(undefined, {
        rules: {
          'focus-visible': { enabled: true },
        },
      });
    });
  });
});