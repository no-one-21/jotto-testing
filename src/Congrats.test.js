import React from 'react';
import Enzyme , { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps} from '../test/testUtil';
import checkPropTypes from 'check-prop-types';
import Congrats from './Congrats';



//to coonfigure and let the enzyme know that it is going to use this enzye adapter
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) =>{
    return shallow(<Congrats {...props} />);
}

test('renders without error',()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect (component.length).toBe(1);
});

test('renders nothing when success is false',()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
});

test('rendrs something when success message is true',()=>{
    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props',()=>{
    const expectedProps = {success:false};
    checkProps(Congrats,expectedProps);

})