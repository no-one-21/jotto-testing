import {getLetterMatchCount} from '../helpers';
import axios from 'axios';


export const actionTypes = {
    CORRECT_GUESS : 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const guessWord = (guessedWord) =>{
    return function (dispatch,getState){
       const secretWord = getState().secretWord;
       const letMatchCount = getLetterMatchCount(guessedWord,secretWord);

       dispatch({
           type: actionTypes.GUESS_WORD,
           payload: {guessWord , letMatchCount}
       });

       if(guessedWord === secretWord){
           dispatch({type:actionTypes.CORRECT_GUESS});
       }
    };
};

export const getSecretWord = () =>{
    return (dispatch) =>{
        axios.get('http://localhost:3030');
    }
}