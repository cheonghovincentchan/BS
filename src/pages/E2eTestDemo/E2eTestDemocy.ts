import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import { cy } from 'local-cypress';
Given('a user visits e2edemo', () => {});
When('I visit e2edemo', () => {
  cy.visit('http://localhost:4000/e2eTestDemo');
});

Then('I should see a input', () => {
  cy.get<HTMLInputElement>('input').type('hello');
});
