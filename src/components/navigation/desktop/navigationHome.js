import React, { Component } from 'react'
import {
    Sidebar,
    Menu,
    Icon
} from 'semantic-ui-react'
import './navigationHome.css'
import '../../../images/logo'
import { quapni_logo_white } from '../../../images/logo';

export class NavigationHome extends Component {
    state = {}
    handlePusherClick = () => {
        const { sidebarOpened } = this.state
        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
    render() {

        const { sidebarOpened } = this.state

        return (

            <div>
                {/* <Sidebar.Pushable>  */}
                <Sidebar as={Menu} animation='overlay' direction='right' inverted vertical visible={sidebarOpened}>
                    <Icon link name='close' size='large' style={{ color: 'white', margin: 10 }} onClick={this.handlePusherClick} />
                    <div style={{ textAlign: 'center' }}>
                        <img alt="quapni_logo" src={quapni_logo_white} style={{ width: 100 }} />
                        <h4 style={{ color: 'white' }} >尚 未 選 購 商 品</h4>
                    </div>
                </Sidebar>
                <Sidebar.Pusher
                    dimmed={sidebarOpened}
                    onClick={this.handlePusherClick}
                >
                    <div className="menu-style">
                        <div className="header-content">
                            <div className="header-logo">
                                <a href="/">
                                    <img alt="quapni_logo" src={quapni_logo_white} style={{ width: 150 }} />
                                </a>
                            </div>
                            <div className="header-navigation">
                                <ul className="nav">
                                    <li>
                                        <a className="browse-item" href="/brand">品牌故事</a>
                                    </li>
                                    <li>
                                        <a className="browse-item" href="">商品總覽</a>
                                    </li>
                                    <li className="mega-dropdown" style={{ textAlign: 'left' }}>
                                        <a className="browse-item" href="#" style={{ paddingTop: 16, paddingBottom: 20 }}>
                                            商品分類
                                                </a>
                                        <div className="megamenu widget center">
                                            <div className="blur" />
                                            <div className="ui container">
                                                <div className="ui five column relaxed equal height divided stackable grid">
                                                    <div className="column">
                                                        <h2 className="ui header header-color">前打輪</h2>
                                                        <hr className="dividing-line" />
                                                        <div className="ui link list">
                                                            <a className="item menu-text">納茲卡 Nazca</a>
                                                            <a className="item menu-text">山茶 Camellia</a>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <h2 className="ui header header-color">裝備 / 配件</h2>
                                                        <hr className="dividing-line" />
                                                        <div className="ui link list">
                                                            <a className="item menu-text">碳纖維魚夾</a>
                                                            <a className="item menu-text">水深探測棒</a>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <h2 className="ui header header-color">筏輪</h2>
                                                        <hr className="dividing-line" />
                                                        <div className="ui link list">
                                                            <a className="item menu-text">筏輪 Quattro</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginRight: 30 }}>
                                <ul className="nav right">
                                    <li>
                                        <a className="browse-item" href="#">登入&nbsp;｜&nbsp;註冊</a>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ marginRight: 30 }}>
                                <ul className="nav right">
                                    <li>
                                        <a className="browse-item mouse-pointer">
                                            <i className="shopping cart icon" onClick={this.handleToggle} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Sidebar.Pusher>
                {/* </Sidebar.Pushable> */}
            </div>

        )
    }
}
