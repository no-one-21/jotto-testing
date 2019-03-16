import {getLetterMatchCount} from '../helpers';

export const actionTypes = {
    CORRECT_GUESS : 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
};

export const guessWord = (guessWord) =>{
    return function (dispatch,getState){
       const secretWord = getState().secretWord;
       const letMatchCount = getComputedStyle(guessWord,secretWord);

       dispatch({
           type: actionTypes.GUESS_WORD,
           payload: {guessWord , letMatchCount}
       });

       if(guessWord === secretWord){
           dispatch({type:actionTypes.CORRECT_GUESS});
       }
    };
};