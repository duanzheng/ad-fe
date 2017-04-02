/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from './list.scss';
import { Input, Alert } from 'antd';
import TodoItem from './todoItem';

@CSSModule(styles, {allowMultiple: true})
class Todos extends Component {
    render() {
        return (
            <div styleName="container">
                <div>有<strong>2</strong>件准备做的事情</div>
                <Input size="large" placeholder="请输入要做的事情" />
                <ul styleName="list">
                    {this.props.items.map((item, index) =>
                        <TodoItem key={index} msg={item.desc} type="info"/>
                    )}
                </ul>
            </div>
        )
    }
}

export default Todos;