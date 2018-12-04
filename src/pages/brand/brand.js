import React from 'react'

import './brand.css'

import { Container } from 'semantic-ui-react'
import { camellia } from '../../images/brand';
import { quapni_logo } from '../../images/logo';
 
import { Navigation } from '../../components/navigation/desktop/navigation'
import { Footer } from '../../components/footer/footer'
export const Brand = () => (
    <div>
        <title>品牌故事 - Quapni</title>
        < Navigation />
        <Container>
            <img className="brand-logo" alt="quapni_logo" src={quapni_logo} />
            <h1 className="brand-slogan">突破 創新 舒適 精緻簡約</h1>
            <p className="brand-paragraph">
                提供給愛好大自然的你們！<br />
                有更好更健康的生活方式，<br />
                產品研發 堅持『 舒適 』與『 創新』，<br />
                突破現有的設計與生產技術，<br />
                滿足操控性與使用性的最高境界。
            </p>
        </Container>
        <div className="brand-box">
            <img src={camellia} />
        </div>
        <Footer />
    </div>
)