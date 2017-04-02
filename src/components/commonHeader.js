/**
 * Created by mac on 2017/4/1.
 */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

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
            <div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="todos">
                        <Link to="/">
                            备忘录
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="other">
                        <Link to="/other">
                        其他
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default CommonHeader;