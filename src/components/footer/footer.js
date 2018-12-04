import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { instagram, facebook, iphone, youtube } from '../../images/icon';

import './footer.css'
import 'semantic-ui-css/semantic.min.css';

const theme = {
    flexboxgrid: {
        // Defaults
        gridSize: 12, // columns
        gutterWidth: 1, // rem
        outerMargin: 2, // rem
        mediaQuery: 'only screen',
        container: {
            sm: 46, // rem
            md: 61, // rem
            lg: 76  // rem
        },
        breakpoints: {
            xs: 0,  // em
            sm: 48, // em
            md: 64, // em
            lg: 75  // em
        }
    }
}


export const Footer = () => (
    <div>
        <div className="ui inverted vertical segment">
            <div className="ui container">
                <div className="ui stackable divided equal height grid">
                    <ThemeProvider theme={theme}>
                        <Grid className="footer-container">
                            <Row>
                                <Col xs={12} sm={4} md={3} lg={3} className="mobile-layout">
                                    <h4>聯絡資訊</h4>
                                    <div>
                                        <p>
                                            台中市大雅區上山路184號<br />
                                            service@quapni.com.tw<br />
                                            04 - 25605778<br />

                                            <h4 className="footer-box">服務時間</h4>
                                            09:00-17:00 (不含例假日)
                                        </p>
                                    </div>
                                </Col>
                               
                                <Col xs={12} sm={2} md={2} lg={1} className="mobile-layout">
                                    <h4>說明</h4>
                                    <div className="ui inverted link list">
                                        <a className="item" href="#"> 得獎認證 </a>
                                        <a className="item" href="#"> 退貨規則 </a>
                                        <a className="item" href="#"> 常見問題 </a>
                                    </div>
                                </Col>
                                
                                <Col xs={12} sm={2}  md={2} lg={1} className="mobile-layout">
                                    <h4>服務</h4>
                                    <div className="ui inverted link list">
                                        <a className="item" href="#"> 查找商家 </a>
                                        <a className="item" href="#"> 客服中心 </a>
                                    </div>
                                </Col>
                               
                                <Col xs={12} sm={3}  md={4} lgOffset={4} lg={2} className="mobile-layout">
                                    <h4>相關連結</h4>
                                    <div className="ui inverted link list">
                                        <a href="https://www.instagram.com/quapni/" target="_blank">
                                            <img className="icon-size" alt="instagramIcon" src={instagram} />
                                        </a>
                                        <a href="https://www.facebook.com/quapni/" target="_blank">
                                            <img className="icon-size" alt="facebookIcon" src={facebook} />
                                        </a>
                                        <a href="https://www.youtube.com/user/quapni" target="_blank">
                                            <img className="icon-size" alt="yotubeIcon" src={youtube} />
                                        </a>
                                    </div>
                                </Col>
                                
                                <Col xs={12} sm={1} md={1} lg={1}>
                                    <div className="application-layout">
                                        <h4>APP</h4>
                                        <div className="ui inverted link list">
                                            <a href="/appIntro">
                                                <img className="icon-size" alt="iphoneIcon" src={iphone} />
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </ThemeProvider>

                    {  /*  分 隔 線  div  */}
                    <div className="separation-line" />
                </div>

                <div className="footer-div">
                    <a href="#">隱私政策</a>
                    <a href="#">使用條款</a>
                    <a href="#">Cookie政策</a>
                </div>

            </div>
        </div>
    </div>
)

