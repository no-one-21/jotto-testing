
import checkPropTypes from 'check-prop-types';

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