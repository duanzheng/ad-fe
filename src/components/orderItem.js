/**
 * Created by mac on 2017/4/6.
 */
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import CSSModule from 'react-css-modules';
import styles from './orderItem.scss';

@CSSModule(styles, {allowMultiple: true})
class OrderItem extends Component {
    render() {
        const { table, food } = this.props;
        return (
            <Card styleName="item" title={table} style={{width: 300}}>
                {
                    food.map((item, index) =>
                        <p key={index}>{item}</p>
                    )
                }
                <div styleName="btn-group">
                    <Button type="primary">接单</Button>
                    <Button styleName="btn-refuse" type="danger">拒单</Button>
                </div>
            </Card>
        )
    }
}

export default OrderItem;