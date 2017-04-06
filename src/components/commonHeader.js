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
    }

    handleClick(e) {
        console.log(e);
    }

    render() {
        const
            { current } = this.props,
            currentKey = '.$' + current;

        return (
            <Header>
                <div styleName="container">
                    <div styleName="logo">
                        阿D点菜
                    </div>
                    <Menu
                        onClick={this.handleClick}
                        theme="dark"
                        selectedKeys={[currentKey]}
                        mode="horizontal"
                        styleName="list"
                    >
                        <Menu.Item key="order">
                            <Link to="/">
                                订单
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="seat">
                            <Link to="/seat">
                                座位
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }
}

export default CommonHeader;