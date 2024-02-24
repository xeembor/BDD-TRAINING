import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker'
let sel
before(function () {
  cy.fixture('selectors').then((data) => {
    sel = data
  })
})

Given(/^User is on trymima page$/, () => {
	cy.visit('/')
});

When(/^User Clicks Sign Up Button$/, () => {
	cy.clickElement(sel.signUpPage.signupButton)
});

When(/^User fills in a valid full name$/, () => {
	cy.typeAValue(sel.basicDetailsPage.fullnameField, faker.person.fullName())
});

When(/^User fills in a valid business name$/, () => {
	cy.log('Hafsat', 'Yusuff')
});

When(/^User fills in a valid business email$/, () => {
	cy.log('Gambo', 'Usman')
});

When(/^User fills in a valid phone number$/, () => {
	cy.log('Ruth', 'Nyem')
});

When(/^User fills in a valid business registration number$/, () => {
	cy.log('Segun', 'Durojaiye')
});

When(/^User Clicks the Next Button$/, () => {
	cy.log('Salman', 'Muhammad')
});

When(/^User fills in a valid website name$/, () => {
	cy.log('Femi', 'Omeiza')
});

When(/^User fills in a valid instagram handle$/, () => {
	cy.log('Lukman', 'Olabanjo')
});

When(/^User fills in a valid twitter handle$/, () => {
	return true;
});

When(/^User selects how they heard about mima$/, () => {
	return true;
});

When(/^User inserts password$/, () => {
	return true;
});

When(/^User clicks the SignUp Button$/, () => {
	return true;
});

Then(/^User sees token notification message$/, () => {
	return true;
});

Then(/^User retrieves token from email$/, () => {
	return true;
});

When(/^User inserts token on the token page$/, () => {
	return true;
});

Then(/^The user should have access to the home page$/, () => {
	return true;
});
