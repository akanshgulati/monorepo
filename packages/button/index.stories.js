import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from "@ixi-ui/icon"

import Button from './src'

storiesOf('Button', module)

    .add('with text', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ))

    .add('with some emoji', () => (
        <Button onClick={action('clicked')}><Icon name="smiley"/></Button>
    ))

    .add('with a theme provider', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ));