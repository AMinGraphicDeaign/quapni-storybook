import React from 'react'
import './category.css'
import '../../images/category'
import { ThemeProvider } from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { about_us, new_arrival, bussiness_location, front_wheel, quattro } from '../../images/category';


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

export const Category = () => (
    <div>
        <ThemeProvider theme={theme}>
            <Grid fluid>
                <Row center="xs">
                    <Col xm={12} sm={4} md={4} lg={4} className="grid-padding card-container">
                        <a className="zoom-in img-mask" href="#">
                            <div className="grid-title"><b>關於我們</b></div>
                            <img alt="" src={about_us} />
                        </a>
                    </Col>
                    <Col xm={12} sm={4} md={4} lg={4} className="grid-padding card-container">
                        <a className="zoom-in img-mask" href="#">
                            <div className="grid-title"><b>最新商品</b></div>
                            <img alt="" src={new_arrival} />
                        </a>
                    </Col>
                    <Col xm={12} sm={4} md={4} lg={4} className="grid-padding card-container">
                        <a className="zoom-in img-mask" href="#">
                            <div className="grid-title"><b>商家據點</b></div>
                            <img alt="" src={bussiness_location} />
                        </a>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col xm={12} sm={6} md={6} lg={6} className="grid-padding card-container">
                        <a className="zoom-in img-mask-others" href="#">
                            <div className="grid-title"><b>前打輪</b></div>
                            <img alt="" src={front_wheel} />
                        </a>
                    </Col>
                    <Col xm={12} sm={6} md={6} lg={6} className="grid-padding card-container">
                        <a className="zoom-in img-mask-others" href="#">
                            <div className="grid-title"><b>筏輪</b></div>
                            <img alt="" src={quattro} />
                        </a>
                    </Col>
                </Row>
            </Grid>
        </ThemeProvider>
    </div>
)