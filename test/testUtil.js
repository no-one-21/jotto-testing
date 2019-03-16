
import checkPropTypes from 'check-prop-types';
import {createStore } from 'redux';

import rootReducer from '../src/reducers';

//firstly we have imported create store and rootreducer ,
//now we will create a store factory


export const findByTestAttr = (wrapper , val) => {
   return wrapper.find(`[data-test="${val}"]`)
}
 
//proptypes will be a function that takes the component which we will  be cheecking ns also the prop which will be checked

export const checkProps = (component , conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}
export const storefactory = (initialState) =>{
    return createStore(rootReducer,initialState);
}