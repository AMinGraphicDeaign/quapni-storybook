import React from 'react'

import { storiesOf } from '@storybook/react'
import { Footer } from '../components/footer/footer'
import { Category } from '../components/category/category'
import { Parallax } from '../components/parallax/parallax'
import { Slideshow } from '../components/slideshow/desktop/slideshow'
import { MobileSlideshow } from '../components/slideshow/mobile/slideshow'
import { NavigationHome } from '../components/navigation/desktop/navigationHome';
import { MobileNavigation } from '../components/navigation/mobile/navigation'
import { Navigation } from '../components/navigation/desktop/navigation'
import { Hero } from '../components/hero/hero'

import { Brand } from '../brand/brand'
storiesOf('Components', module)
         .add('Navigation', () => <Navigation />)
         .add('NavigationHome', () => <NavigationHome />)
         .add('MobileNavigation', () => <MobileNavigation />)
         .add('Footer', () => <Footer />)
         .add('Category',() => <Category /> )
         .add('Parallax',() => <Parallax /> )
         .add('Slideshow',() => <Slideshow /> )
         .add('MobileSlideshow',() => <MobileSlideshow /> )
         .add('Hero',() => <Hero />)

storiesOf('Brand', module)
         .add('Brand',() => <Brand />)