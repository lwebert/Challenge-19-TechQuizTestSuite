import mockQuestions from '../fixtures/questions.json';
// import { Responses } from '../support/types'



describe('Tech Quiz End-to-End Test Suite', () => {
    context('Quiz Setup', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3001');
            cy.intercept('GET', 'api/questions/random', {
                // statusCode: 200,
                // body: 'mockQuestions'
                fixture: 'questions.json'
            }).as('fixtureQuestions');

        });

        it('Should render the "Start Quiz" button on page load.', () => {
            cy.findByText('Start Quiz').should('be.visible');
        })

        it('Upon quiz start, should render the first question and answer options.', () => {
            cy.get('button').contains('Start Quiz').click();
            cy.wait('@fixtureQuestions').its('response.statusCode').should('eq', 200)

            cy.get('.card').should('exist').and('not.be.empty');
            cy.get('h2').should('exist').and('not.be.empty');
            cy.get('.btn-primary').should('exist').and('not.be.empty');
            cy.get('.btn-primary').should('have.length', 4)

        })
    });

    context('User Taking Quiz', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3001');
            cy.intercept('GET', 'api/questions/random', {
                // statusCode: 200,
                // body: 'mockQuestions'
                fixture: 'questions.json'

            }).as('fixtureQuestions');

            cy.get('button').contains('Start Quiz').click();
            cy.wait('@fixtureQuestions').its('response.statusCode').should('eq', 200)
        });

        it('Should allow the user to answer all questions and see the final score.', () => {
            mockQuestions.forEach((question) => {
                const correctAnswer = question.answers.find((answer) => answer.isCorrect)
                cy.get('.alert').contains(correctAnswer?.text).prev('button').click();
            })

            cy.get('h2').contains('Quiz Completed').should('be.visible');
            cy.get('.alert').contains(`Your score: ${mockQuestions.length}/${mockQuestions.length}`).should('be.visible')
        })

        it('Should displayt the correct final score if the user answers incorrect answers.', () => {
            mockQuestions.forEach((question) => {
                const wrongAnswer = question.answers.find((answer) => !answer.isCorrect)
                cy.get('.alert').contains(wrongAnswer?.text).prev('button').click();
            })

            cy.get('h2').contains('Quiz Completed').should('be.visible');
            cy.get('.alert').contains(`Your score: 0/${mockQuestions.length}`).should('be.visible')
        })
    });

    context('Quiz Restart', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3001');
            cy.intercept('GET', 'api/questions/random', {
                // body: mockQuestions,
                // statusCode: 200,
                // body: 'mockQuestions'
                fixture: 'questions.json'
            }).as('fixtureQuestions');

            cy.get('button').contains('Start Quiz').click();
            cy.wait('@fixtureQuestions')

            mockQuestions.forEach((question) => {
                const correctAnswer = question.answers.find((answer) => answer.isCorrect)
                cy.get('.alert').contains(correctAnswer?.text).prev('button').click();
            })

            cy.get('h2').contains('Quiz Completed').should('be.visible');

        });

        it('Should restart the quiz when the button "Take New Quiz" is clicked.', () => {
            cy.get('button').contains('Take New Quiz').click();

            cy.wait('@fixtureQuestions').its('response.statusCode').should('eq', 200)

            cy.get('.card').should('exist').and('not.be.empty');
            cy.get('h2').should('exist').and('not.be.empty');
            cy.get('.btn-primary').should('exist').and('not.be.empty');
            cy.get('.btn-primary').should('have.length', 4)
        })


    });
})