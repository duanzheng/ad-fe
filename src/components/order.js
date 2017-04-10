/**
 * Created by mac on 2017/4/6.
 */
import React, { Component } from 'react';
import CommonHeader from './commonHeader';
import { Layout, Radio } from 'antd';
const
    { Content } = Layout;
import OrderList from '../containers/orderList';

import styles from './order.scss';
import CSSModule from 'react-css-modules';

@CSSModule(styles, { allowMultiple: true })
class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectType: "1"
        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleTypeChange(e) {
        this.setState({ selectType: e.target.value });

    }

    render() {
        return (
            <div>
                <Layout>
                    <CommonHeader current="order"/>
                    <Content styleName="content">
                        <div>
                            <Radio.Group value={this.state.selectType} onChange={this.handleTypeChange}>
                                <Radio.Button value="1">未处理</Radio.Button>
                                <Radio.Button value="2">已处理</Radio.Button>
                                <Radio.Button value="3">全部</Radio.Button>
                            </Radio.Group>
                            <OrderList/>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Order;