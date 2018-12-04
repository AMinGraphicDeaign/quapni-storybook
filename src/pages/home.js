import React from 'react'
import { NavigationHome } from '../components/navigation/desktop/navigationHome'
import { MobileNavigation } from '../components/navigation/mobile/navigation'
import { Footer } from '../components/footer/footer'
import { Hero } from '../components/hero/hero'
import { Parallax } from '../components/parallax/parallax'
import { Slideshow } from '../components/slideshow/desktop/slideshow'
import { MobileSlideshow } from '../components/slideshow/mobile/slideshow'
import { Category } from '../components/category/category'

import { Responsive } from 'semantic-ui-react'

import './home.css'

export const Home = () => (
	<div>
		{/*  電 腦 版   網 頁  */}
		<Responsive minWidth={920}>
			<div className="home-nav"><NavigationHome /></div>
			<Hero />
			<div className="home-sildeshow"><Slideshow /></div>
			<div className="home-parallax"><Parallax /></div>
			<div className="home-Category"><Category /></div>
			<Footer />
		</Responsive>

       {/*  行 動 裝 置 版   網 頁  */}
		<Responsive maxWidth={919}>
			<MobileNavigation>
				<Hero />
				<Responsive maxWidth={767}><MobileSlideshow /></Responsive>
				<Responsive minWidth={768}>
					<div className="home-sildeshow"><Slideshow /></div>
					<div className="home-parallax"><Parallax /></div>
				</Responsive>
				<div className="home-Category"><Category /></div>
				<Footer />
			</MobileNavigation>
		</Responsive>
	</div>
)
