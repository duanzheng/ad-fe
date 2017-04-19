/**
 * Created by mac on 2017/4/18.
 */
import React from 'react';
import { Card } from 'antd';
import CSSModule from 'react-css-modules';
import styles from './seatItem.scss';

const SeatItem = ({ name }) => (
    <Card styleName="item" style={{width: 300}}>
        <img styleName="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492533435096&di=766bf9ba776d66edac0436bb025fbc60&imgtype=0&src=http%3A%2F%2Fwww.zyue.com%2Fupload%2Faddr%2Fer_20140725105541.png" alt=""/>
        <div styleName="content">{name}</div>
        <div styleName="btn-modify">
            <a href="javascript:;">设置</a>
        </div>
    </Card>
)

export default CSSModule(styles, {allowMultiple: true})(SeatItem);