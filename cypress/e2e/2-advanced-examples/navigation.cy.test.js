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
});// ...

describe("Navigation", () => {
  // ...

  it("should validate tabbing order from Home to Dashboard menu", () => {
    cy.get("a").contains("Home").focus().realPress("Tab");
    cy.get("a").contains("Dashboard").should("be.focused");
  });

  it("should validate tabbing order from Dashboard to Trainings menu", () => {
    cy.get("a").contains("Dashboard").focus().realPress("Tab");
    cy.get("a").contains("Trainings").should("be.focused");
  });

  it("should validate tabbing order from Trainings to Quiz menu", () => {
    cy.get("a").contains("Trainings").focus().realPress("Tab");
    cy.get("a").contains("Quiz").should("be.focused");
  });

  it("should validate the keyboard operability for Profile Icon image", () => {
    cy.get("img.profile-picture").focus().type("{enter}");
    cy.get("img.profile-picture").should("be.focused");
  });
});

describe("Testing CYPRESS A11Y in Quiz HTML", () => {
  it("tests Testing CYPRESS A11Y in Quiz HTML", () => {
    cy.viewport(1723, 150);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");
    cy.get("body").click();
    cy.get("li:nth-of-type(3)").click();
    cy.get("#question").click();
    cy.realPress("Enter");
  });
});

describe("Recording 1/4/2024 at 12:17:04 AM", () => {
  it("tests Recording 1/4/2024 at 12:17:04 AM", () => {
    cy.viewport(1723, 398);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");
    cy.get("#question").click();
    cy.realPress("Enter");
    cy.get("#question").click();
    cy.realPress("Enter");
    cy.realPress("Enter");
    cy.realPress("Enter");
  });
});

describe("Recording with enter key", () => {
  it("tests Recording with enter key", () => {
    cy.viewport(1723, 398);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");
    cy.get("li:nth-of-type(1) > input").type("{enter}");
    cy.get("#next-btn").type("{enter}");
    cy.get("li:nth-of-type(1) > input").type("{enter}");
    cy.get("#next-btn").type("{enter}");
    cy.get("li:nth-of-type(1) > input").type("{enter}");
    cy.get("#next-btn").type("{enter}");
    cy.get("li:nth-of-type(1) > input").type("{enter}");
    cy.get("#next-btn").type("{enter}");
    cy.get("li:nth-of-type(1) > input").type("{enter}");
    cy.get("#next-btn").type("{enter}");
    cy.get("li:nth-of-type(1) > input").type("{enter}");
    cy.get("#next-btn").type("{enter}");
    cy.get("#submit-btn").type("{enter}");
  });
});

describe("Recording to validate the pop using click", () => {
  it("tests Recording to validate the pop using click", () => {
    cy.viewport(1723, 189);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");
    cy.get("#submit-btn").click();
  });
});

describe("Recording to validate Pop up using enter key", () => {
  it("tests Recording to validate Pop up using enter key", () => {
    cy.viewport(1723, 189);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");
    cy.type("{enter}");
  });
});

describe("Retake Quiz Btn Enter key", () => {
  it("tests Retake Quiz Btn Enter key", () => {
    cy.viewport(1723, 327);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");
    cy.get("#question").click();
    cy.get("#retake-btn").type("{enter}");
  });
});

describe("Submit button and alert", () => {
  it("tests the submit button and validates the alert", () => {
    cy.viewport(1723, 189);
    cy.visit("https://vjkumar57.github.io/LearnCypressA11Y/");

    // Listen to the window:alert event
    cy.on('window:alert', (str) => {
      // Make assertions on the alert message
      //expect(str).to.equal('Expected alert message');
    });

    // Trigger the alert by clicking the submit button
    cy.get("#submit-btn").click();
  });
});it("should validate keyboard operability for Profile Icon image", () => {
  cy.get("img.profile-picture").focus().type("{enter}");
  cy.get("img.profile-picture").should("be.focused");
});