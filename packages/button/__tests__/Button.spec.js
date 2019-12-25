import React from 'react';
import {mount} from 'enzyme';
import * as renderer from 'react-test-renderer'
import Button from '../src';

describe('Button Component', function() {
    it('renders without props', function() {
        const wrapper = mount(<Button>Hey</Button>);
        const button = wrapper.find('.button');
        expect(button.length).toBe(1);
    });
});

// test('Link changes the class when hovered', () => {
//     const component = renderer.create(
//         <Button>Hey</Button>
//     );
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });