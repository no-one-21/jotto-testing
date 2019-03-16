import {correctGuess , actionTypes} from './';

describe('correctGuess is bein tested',()=>{
    test('correct return type is given as output',()=>{
        const action = correctGuess()
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS});
    });
});