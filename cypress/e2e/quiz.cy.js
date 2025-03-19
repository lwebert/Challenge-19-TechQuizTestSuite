import { mockState } from '../support/utils/helpers';

describe('Tech Quiz Test Suite', () => {
    context('Quiz Setup', () => {
        beforeEach(() => {
            cy.intercept('GET', 'api/questions/random', {
                body: mockState,
                statusCode: 200,
            }).as('getRandomQuestion');

            cy.visit('/');
        });

        it('Unit test: Should GET a random question on page load, and render the random question to the page.')



    });

    context('User Taking Quiz', () => { });

    context('Quiz Restart', () => { });
})