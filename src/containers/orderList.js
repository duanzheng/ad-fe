/**
 * Created by mac on 2017/4/6.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItem from '../components/orderItem';

@connect(
    state => ({
        itemList: state.order.orderList
    })
)
class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { itemList } = this.props;
        return (
            <div>
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