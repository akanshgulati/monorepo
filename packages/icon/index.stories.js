import React from 'react'
import {storiesOf} from '@storybook/react'

import Icon from './src'

storiesOf('Icons', module)

    .add('default size', () => (
        <Icon name="search"/>
    ))
    .add('large size', () => (
        <Icon name="search" size="l"/>
    ));