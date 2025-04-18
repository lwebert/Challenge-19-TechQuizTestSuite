// import React from 'react';
import Quiz from '../../client/src/components/Quiz.jsx';

// const questions = [
// 	// const questions = [
// 	{
// 		_id: '1',
// 		question: 'What is the capital of France?',
// 		answers: [
// 			{ text: 'Paris', isCorrect: true },
// 			{ text: 'London', isCorrect: false },
// 			{ text: 'Berlin', isCorrect: false },
// 			{ text: 'Rome', isCorrect: false },
// 		],
// 	},
// 	{
// 		_id: '2',
// 		question: 'Which planet is known as the Red Planet?',
// 		answers: [
// 			{ text: 'Earth', isCorrect: false },
// 			{ text: 'Mars', isCorrect: true },
// 			{ text: 'Jupiter', isCorrect: false },
// 			{ text: 'Saturn', isCorrect: false },
// 		],
// 	},
// 	{
// 		_id: '3',
// 		question: 'Who wrote "Romeo and Juliet"?',
// 		answers: [
// 			{ text: 'William Shakespeare', isCorrect: true },
// 			{ text: 'Mark Twain', isCorrect: false },
// 			{ text: 'Jane Austen', isCorrect: false },
// 			{ text: 'Charles Dickens', isCorrect: false },
// 		],
// 	},
// 	{
// 		_id: '4',
// 		question: 'Which gas do humans need to breathe?',
// 		answers: [
// 			{ text: 'Carbon Dioxide', isCorrect: false },
// 			{ text: 'Oxygen', isCorrect: true },
// 			{ text: 'Hydrogen', isCorrect: false },
// 			{ text: 'Nitrogen', isCorrect: false },
// 		],
// 	},
// 	{
// 		_id: '5',
// 		question: 'What is the color of the sky?',
// 		answers: [
// 			{ text: 'Blue', isCorrect: true },
// 			{ text: 'Green', isCorrect: false },
// 			{ text: 'Red', isCorrect: false },
// 			{ text: 'Orange', isCorrect: false },
// 		],
// 	},
// ];

describe('<Quiz />', () => {
	it('Should render the Quiz component.', () => {
		cy.mount(<Quiz />);
	});

	it('Should render the Quiz component before the quiz is started, and display a button.', () => {
		cy.mount(<Quiz />);
		cy.get('button').should('have.text', 'Start Quiz');
	});

	it('Should render the Quiz component after the quiz has started, and display the current question.', () => {
		cy.mount(<Quiz />);
		cy.get('button').click(); // TODO: Start the quiz ??
		cy.get('h2').should('exist');
	});
});
