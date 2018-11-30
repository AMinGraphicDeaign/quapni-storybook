import React, { Component } from "react";
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import './slideshow.css'
import { working, nazaca_01, nazaca_02, camellia_01 } from "../../../images/slideshow";


export class Slideshow extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            //autoplay: true,
            //autoplaySpeed: 2000,
        };
        return (
            <div>
                <Slider {...settings} className="slick-wrapper">
                    <div className="slick-img-mask">
                        <img src={working} />
                        <div className="slogan">
                            我們相信<br />唯有用心堅持<br />才能看見與眾不同
                        </div>
                    </div>

                    <div className="slick-img-mask">
                        <img src={nazaca_01} />
                        <div className="slick-title">前打輪</div>
                        <div className="paragraph-style">
                            <div>單款風格化。固定柄設計</div><br />
                            <div style={{ color: "#ff7576" }}>高品質輪座 堅固耐用</div>
                        </div>
                    </div>

                    <div className="slick-img-mask">
                        <img src={nazaca_02} />
                        <div className="slick-title">納茲卡</div>
                        <div className="paragraph-notestyle">
                            <div>靈活無限。順暢無阻</div><br />
                            <div style={{ color: "#ff7576", fontSize: "3vmin" }}><b>日本第一品牌 NSK 培林</b></div>
                        </div>
                    </div>

                    <div className="slick-img-mask">
                        <img src={camellia_01} />
                        <div className="slick-title">山茶</div>
                        <div className="paragraph-style">
                            <div>專利設計 - 壓鈕機構快拆</div><br />
                            <div style={{ color: "#ff7576" }}><b>1秒快速拆卸</b></div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}