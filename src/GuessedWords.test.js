import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../test/testUtil';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [
        {guessedWord:'train', letterMatchCount: 3},
    ],
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords{...setupProps}/>)
};

//checking Props 
test('chekcing whether props are correct',()=>{
    checkProps(GuessedWords,defaultProps);
})

//describe is just a way of grouping tests ....
describe('if their are no words guessed',()=>{
    test('renders without error',()=>{
        const wrapper = setup({guessedWords:[]})
        const component = findByTestAttr(wrapper,'component-guessed-words');
         expect(component.length).toBe(1);
    });

    test('renders instructions to guess the word',()=>{
        const wrapper = setup({guessedWords:[]})
        const instructions = findByTestAttr(wrapper,'guessed-instructions')
        expect(instructions.text().length).not.toBe(0);
    })
});

describe('if their are words guessed',()=>{

});


