/**
 * Created by mac on 2017/4/6.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItem from '../components/orderItem';
import CSSModule from 'react-css-modules';
import styles from './orderList.scss';

@connect(
    state => ({
        itemList: state.order.orderList
    })
)
@CSSModule(styles, {allowMultiple: true})
class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { itemList } = this.props;
        return (
            <div styleName="container">
                {
                    itemList.map((item, index) =>
                        <OrderItem key={index} table={item.table} food={item.food} />
                    )
                }
            </div>
        )
    }
}

export default OrderList;