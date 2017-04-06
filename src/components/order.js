/**
 * Created by mac on 2017/4/6.
 */
import React, { Component } from 'react';
import CommonHeader from './commonHeader';

class Order extends Component {
    render() {
        return (
            <div>
                <CommonHeader current="order"></CommonHeader>
            </div>
        )
    }
}

export default Order;