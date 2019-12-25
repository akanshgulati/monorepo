import React from 'react';
import {mount} from 'enzyme';
import * as renderer from 'react-test-renderer'
import Icon from '../src';

describe('Icon Component', function () {
    it('renders without props', function () {
        const wrapper = mount(<Icon name="search"/>);
        const svg = wrapper.find('svg');
        expect(svg.length).toBe(1);
    });
    it('Icon generates right svg', () => {
        const component = renderer.create(
            <Icon name="search" size="large"/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

