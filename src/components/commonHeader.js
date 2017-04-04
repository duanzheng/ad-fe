/**
 * Created by mac on 2017/4/1.
 */
import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import styles from './commonHeader.scss';
const { Header } = Layout;

@CSSModule(styles, {allowMultiple: true})
class CommonHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'todos'
        }
    }

    handleClick = e => {
        this.setState({
            current: e.key
        })
    };

    render() {
        const SubMenu = Menu.SubMenu;
        return (
            <Layout className="layout">
                <Header>
                    <div styleName="logo">
                        阿D点菜
                    </div>
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        styleName="list"
                    >
                        <Menu.Item key="todos">
                            <Link to="/">
                                订单
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="other">
                            <Link to="/other">
                                座位
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default CommonHeader;