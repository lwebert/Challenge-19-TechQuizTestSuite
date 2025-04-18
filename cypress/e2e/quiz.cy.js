// import { mockQuestions } from '../support/utils/helpers';
// import { Responses } from '../support/types'

describe('Tech Quiz End-to-End Test Suite', () => {
    context('Quiz Setup', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000');
            cy.intercept('GET', 'api/questions/random', {
                // body: mockQuestions,
                statusCode: 200,
                fixture: 'questions.json'
            }).as('fixtureQuestions');

        });

        it('Should render the "Start Quiz" button on page load.', () => {
            cy.findByText('Start Quiz').should('be.visible');
        })

        it('Upon quiz start, should render a random question with answer options.', () => {
            cy.get('button').contains('Start Quiz').click();
        })

        it('Unit test: Should GET a random question on page load, and render the random question to the page.', () => {
            cy.contains('Start Quiz').click();

            cy.wait('@fixtureQuestions').its('response.statusCode').should('eq', 200);

            cy.get('h2').should('exist').and('not.be.empty');
        });
    });

    context('User Taking Quiz', () => {
        beforeEach(() => {
            cy.intercept('GET', '/api/game/start', {
                statusCode: 200,
                body: mockQuestions,
            }).as('getRandomQuestion');

            cy.visit('/');
            cy.contains('Start Quiz').click();
            cy.wait('@getRandomQuestion');
        });

        it('Should allow the user to answer each question.')
    });

    context('Quiz Restart', () => { });
})