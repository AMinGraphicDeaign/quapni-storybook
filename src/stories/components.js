import React from 'react'

import { storiesOf } from '@storybook/react'
import { Nav } from '../components/nav/desktop'
import { Footer } from '../components/footer/footer'
import { Category } from '../components/category/category'

storiesOf('Components', module)
         .add('Nav', () => <Nav />)
         .add('Footer', () => <Footer />)
         .add( 'Category',() => <Category /> )
