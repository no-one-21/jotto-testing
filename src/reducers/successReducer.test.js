import { actionTypes } from "../actions";
import successReducer from './successReducer';

test("returns null/false when no action is passed" , ()=>{
    const newState = successReducer(undefined,{})
    expect(newState).toBe(false);
})

test('returns true , after receiving an action of correct guess',()=>{
    const newState = successReducer(undefined, {type:actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true);
})

