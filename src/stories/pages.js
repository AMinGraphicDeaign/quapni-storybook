import React from 'react'

import { storiesOf } from '@storybook/react'
import { Home } from '../pages/home'
import { Brand } from '../pages/brand/brand'
import { Application } from '../pages/application/application' 
storiesOf('Pages', module)
	.add('Home', () => <Home />)
	.add('Brand', () => <Brand />)
    .add('Application', () => <Application />)