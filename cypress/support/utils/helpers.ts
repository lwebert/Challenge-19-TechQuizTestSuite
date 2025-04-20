import questions from '../../fixtures/mockWord.json';
import { Question } from '../types';

// export const maskLettersInWord = (word: string) => {
//   return word.replace(/[A-Za-z]/g, '_');
// }

export const mockQuestions: Question = {
	_id: '1',
	question: 'What color is the sky?',
	answers: [
		{
			text: 'Blue',
			isCorrect: true,
		},
		{
			text: 'Green',
			isCorrect: false,
		},
		{
			text: 'Red',
			isCorrect: false,
		},
		{
			text: 'Pink',
			isCorrect: false,
		},
	],
};
