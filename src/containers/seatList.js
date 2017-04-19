/**
 * Created by mac on 2017/4/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Content } = Layout;
import SeatItem from '../components/seatItem';
import CSSModule from 'react-css-modules';

import styles from './seatList.scss';

@CSSModule(styles, {allowMultiple: true})
class SeatList extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Content styleName="container" className="center-content">
                        <SeatItem name="3号房"/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default SeatList;