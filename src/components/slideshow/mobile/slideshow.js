import React from 'react'
import './slideshow.css'
import { quapni_logo } from '../../../images/logo';
import { nazaca_02, nazaca_01, camellia_01 } from '../../../images/slideshow';

export const MobileSlideshow = () => (
    // <Responsive maxWidth={767}>
    <div>
        <div className="text-box">
            <div className="mobile-slogan">
                我們相信<br />
                唯有用心堅持<br />
                才能看見與眾不同。<br />
            </div>
        </div>

        <div>
            <img alt="" src={nazaca_02} />
            <div className="text-box">
                <div className="product-intro">
                    <div className="product-intro-title">前打輪</div>
                    單款風格化。固定柄設計<br />
                    高品質輪座 堅固耐用
                </div>
            </div>

            <img alt="" src={nazaca_01} />
            <div className="text-box">
                <div className="product-intro">
                    <div className="product-intro-title">納茲卡</div>
                    靈活無限。順暢無阻<br />
                    <b>日本第一品牌 NSK 培林</b>
                </div>
            </div>

            <img alt="" src={camellia_01} />
            <div className="text-box">
                <div className="product-intro">
                    <div className="product-intro-title">山茶</div>
                    專利設計 - 壓鈕機構快拆<br />
                    <b>1秒快速拆卸</b>
                </div>
            </div>

            <div className="text-box">
                <div className="logo-style"><img alt="" src={quapni_logo} /></div>
            </div>

        </div>
    </div>
    //   </Responsive> 
)