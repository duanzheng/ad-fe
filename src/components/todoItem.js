/**
 * Created by Tony on 2017/3/20.
 */
import React, { Component } from 'react';
import { Alert } from 'antd';

class TodoItem extends Component {
    render() {
        let { msg, type } = this.props;
        return (
            <li>
                <Alert message={msg} type={type} closable/>
            </li>
        )
    }
}

export default TodoItem;