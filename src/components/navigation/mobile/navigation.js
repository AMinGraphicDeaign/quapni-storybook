import React,{ Component } from 'react'
import {
    Responsive,
    Segment,
    Sidebar,
    Icon,
    Menu,
    Accordion,
    Item,
    Image
} from 'semantic-ui-react'
import './navigation.css'
import '../../../images/logo'
import { quapni_logo } from '../../../images/logo';


export class MobileNavigation extends Component {
        state = {}
        handlePusherClick = () => {
            const { sidebarOpened } = this.state
            if (sidebarOpened) this.setState({ sidebarOpened: false })
        }
    
        handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
        render() {
    
            const { sidebarOpened } = this.state
    
            return (
                // <Responsive maxWidth={919}>
                <div>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='cover' inverted vertical visible={sidebarOpened}>
                            <Menu.Item as='a' href="/"><h4>首 頁</h4></Menu.Item>
                            <Menu.Item as='a' href="/brand"><h4>品 牌 故 事</h4></Menu.Item>
                            <Menu.Item as='a'><h4>商 品 總 覽</h4></Menu.Item>
                            <Menu.Item><h4>商 品 分 類</h4><AccordionExampleStandard></AccordionExampleStandard></Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher
                            dimmed={sidebarOpened}
                            onClick={this.handlePusherClick}
                        >
                        
                            <div className="ui fixed menu">
                                <div className="header-content">
                                    {/* 漢 堡 圖 標 */}
                                    <div className="mobile-nav">
                                        <a className="mobile-item mouse-pointer"><Icon name='sidebar' onClick={this.handleToggle} /></a>
                                    </div>
                                    <div className="header-navigation">
                                        <div>
                                            <img alt="quapni_logo" src={quapni_logo} style={{ width: 120 }} />
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="mobile-nav mobile-right">
                                            <li>
                                                <a className="mobile-item" href="#">
                                                    <i className="user circle icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mobile-item" href="#">
                                                    <i className="shopping cart icon" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* {this.props.children} */}

                            {/*   示範假資料  */}
                            <div style={{margin:100}}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /><br/><br/>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /><br/><br/>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                    </div>
                /*</Responsive> */
            )
        }
    }
    
    
    
    
    // =============================
    /*  手 風 琴     目 錄 選 單    */
    // ============================
    class AccordionExampleStandard extends Component {
        state = { activeIndex: 0 }
    
        handleClick = (e, titleProps) => {
            const { index } = titleProps
            const { activeIndex } = this.state
            const newIndex = activeIndex === index ? -1 : index
    
            this.setState({ activeIndex: newIndex })
        }
        render() {
            const { activeIndex } = this.state
    
            return (
                <Accordion inverted>
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        前 打 輪
              </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <Item> <a href="#">納茲卡 Nazca</a></Item>
                        <Item> <a href="#">山茶 Camellia</a> </Item>
                    </Accordion.Content>
    
                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        裝 備 / 配 件
              </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <Item> <a href="#">碳纖維魚夾</a></Item>
                        <Item> <a href="#">水深探測棒</a> </Item>
                    </Accordion.Content>
    
                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        筏 輪
              </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <Item> <a href="#">筏輪 Quattro</a></Item>
                    </Accordion.Content>
                </Accordion>
            )
        }
    }
   