import { Given} from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Banking Project login page', () => {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
});
