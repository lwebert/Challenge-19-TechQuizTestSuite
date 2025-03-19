import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    it('Should render the Quiz component.', () => {
        cy.mount(<Quiz />)
    });

    it('Should render the Quiz component before the quiz is started, and display a button.', () => {
        cy.mount(<Quiz />)
        cy.get('button').should('.have.text', 'Start Quiz')
    })

    it('Should render the Quiz component after the quiz has started, and display the current question.', () => {
        cy.mount(<Quiz />)
        cy.get('h2').should('.have.text')

    })
})
