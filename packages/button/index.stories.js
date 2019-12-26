import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from "@ixi-ui/icon"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { Meta, Story, Props } from '@storybook/addon-docs/blocks';

import Button from './src'

// Native way to decorate

const styles = {
    textAlign: 'center',
};
const Center = ({ children }) => <div style={styles}>{children}</div>;
    
// Decorator example
const styles2 = {
    textAlign: 'right',
};
const RightAlignDecorator = storyFn => <div style={styles2}>{storyFn()}</div>;

// global decorators example
addDecorator(withA11y);

// story example
storiesOf('Button', module)
    .addDecorator(withKnobs())
    .addParameters({ component: Button })
    .add('with text', () => (
        <Center>
            <Button onClick={action('button-click')}>Button</Button>
        </Center>
    ))

    .add('with some emoji', () => (
        <Button onClick={action('clicked')}><Icon name="smiley"/></Button>
    ))
    .addDecorator(RightAlignDecorator)

    .add('with a theme provider', () => (
        <Button onClick={action('with-theme-click')}>{text("Button Text", "Button")}</Button>
    ))
    .add('not accessible', () => (
        <Button style={{color:"yellow", fontWeight: "300", backgroundColor: "white"}}>Button</Button>
    ))
    .add('accessible', () => (
        <Button style={{color:"black", fontWeight: "700", backgroundColor: "white"}}>Button</Button>
    ))
    .add('disabled state', () => (
        <Button onClick={action('with-theme-click')} disabled={boolean("Disabled", true)}>Button</Button>
    ));

