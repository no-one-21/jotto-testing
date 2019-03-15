// this file will be run by jest , before running any tests
import Enzyme , { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//to coonfigure and let the enzyme know that it is going to use this enzye adapter
Enzyme.configure({adapter: new EnzymeAdapter()});