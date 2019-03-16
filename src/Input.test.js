//when testing components few similar things , shallow and findByTestAttr
import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr , storefactory} from '../test/testUtil';
import Input from './Input';

const setup = (initialState={})=>{
    const store = storefactory(initialState)
    const wrapper =shallow(<Input store={store}/>).dive();
    return wrapper; 
}


describe('render',()=>{
    describe('word has not been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success:false};
            wrapper = setup(initialState);
        }) 
        test('renders component without error',()=>{
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button',()=>{
            const submitButton = findByTestAttr(wrapper,'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState ={success:true};
            wrapper = setup(initialState);
        })
        test('renders component without error',()=>{
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        });
        test('does not renders input box',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.length).toBe(0);
        });
        test(' does not renders submit button',()=>{
            const submitButton = findByTestAttr(wrapper,'submit-button');
            expect(submitButton.length).toBe(0);
        });
    });
});

describe('update state',()=>{

});

