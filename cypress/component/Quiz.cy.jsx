import React from 'react';
// @ts-ignore
import Quiz from '../../client/src/components/Quiz';
// import * as questionApi from '../../client/src/services/questionApi';

// import { mount } from 'cypress/react18';
// import { mockState } from '../support/utils/helpers';

import mockQuestions from '../fixtures/questions.json';
import '@testing-library/cypress/add-commands';

describe('<Quiz /> Component', () => {
	beforeEach(() => {
		cy.intercept('GET', '/api/questions/random', { statusCode: 200, body: mockQuestions }).as('getQuestions')	});

	it('Should render the Quiz component.', () => {
		cy.mount(<Quiz />);
	});

	it('Should display the "Start Quiz" button before the quiz is started.', () => {
		cy.mount(<Quiz />);
		cy.get('button').should('have.text', 'Start Quiz');
	});

	it('Should start the quiz and display a question with 4 answer choices when the "Start" button is clicked.', () => {
		cy.mount(<Quiz />);

		//Press the button to start quiz
		cy.get('button').contains('Start Quiz').click();

		//Check if first question is displayed
		cy.get('h2').should('exist');
		cy.get('h2').should('contain', mockQuestions[0].question);

		//Check if all 4 answer choices
		cy.get('.btn-primary').should('have.length', 4);
		// cy.get('button').contains('1')
		// cy.get('button').contains('2')
		// cy.get('button').contains('3')
		// cy.get('button').contains('4')
	});

	it('Should let user answer questions and complete the quiz.', () => {
		cy.mount(<Quiz />);
		cy.get('button').contains('Start Quiz').click();

		mockQuestions.forEach((question) => {
			const correctAnswerIndex = question.answers.findIndex(
				(answer) => answer.isCorrect
			);
			cy.get('.btn-primary').eq(correctAnswerIndex).click();
		});

		cy.get('h2').contains('Quiz Completed');
		cy.get('.alert-success').contains(`Your score: ${mockQuestions.length}/${mockQuestions.length}`)
	});

	it('Should let the user restart the quiz.', () => {
		cy.mount(<Quiz />)
		cy.get('button').contains('Start Quiz').click(); 

		mockQuestions.forEach(() => {
			cy.get('.btn-primary').contains('1').click();
		});

		cy.get('button').contains('Take New Quiz').click();
		cy.get('h2').should('contain', mockQuestions[0].question);
		cy.get('.btn-primary').should('have.length', 4);

	})
});
