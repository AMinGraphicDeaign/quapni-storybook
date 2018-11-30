import React from 'react'

import { storiesOf } from '@storybook/react'
import { Footer } from '../components/footer/footer'
import { Category } from '../components/category/category'
import { Parallax } from '../components/parallax/parallax'
import { Slideshow } from '../components/slideshow/desktop/slideshow'
import { MobileSlideshow } from '../components/slideshow/mobile/slideshow'
import { Navigation } from '../components/navigation/desktop/navigation';
import { MobileNavigation } from '../components/navigation/mobile/navigation'

storiesOf('Components', module)
         .add('Navigation', () => <Navigation />)
         .add('MobileNavigation', () => <MobileNavigation />)
         .add('Footer', () => <Footer />)
         .add('Category',() => <Category /> )
         .add('Parallax',() => <Parallax /> )
         .add('Slideshow',() => <Slideshow /> )
         .add('MobileSlideshow',() => <MobileSlideshow /> )