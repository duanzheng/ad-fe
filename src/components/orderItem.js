/**
 * Created by mac on 2017/4/6.
 */
import React, { Component } from 'react';
import { Card } from 'antd';

class OrderItem extends Component {
    render() {
        const { table, food } = this.props;
        return (
            <Card title={table} style={{width: 300}}>
                {
                    food.map((item, index) =>
                        <p>{item}</p>
                    )
                }
            </Card>
        )
    }
}

export default OrderItem;