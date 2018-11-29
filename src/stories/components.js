import React from 'react'

import { storiesOf } from '@storybook/react'
import { Nav } from '../components/nav/desktop'
import { Footer } from '../components/footer/footer'
import { Category } from '../components/category/category'
import { Parallax } from '../components/parallax/parallax'
import { Slideshow } from '../components/slideshow/desktop/slideshow'
import { MobileSlideshow } from '../components/slideshow/mobile/slideshow'

storiesOf('Components', module)
         .add('Nav', () => <Nav />)
         .add('Footer', () => <Footer />)
         .add('Category',() => <Category /> )
         .add('Parallax',() => <Parallax /> )
         .add('Slideshow',() => <Slideshow /> )
         .add('MobileSlideshow',() => <MobileSlideshow /> )