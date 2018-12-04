import React from 'react'

import { storiesOf } from '@storybook/react'
import { Home } from '../pages/home'
import { Brand } from '../pages/brand/brand'

storiesOf('Pages', module)
	.add('Home', () => <Home />)
	.add('Brand', () => <Brand />)
