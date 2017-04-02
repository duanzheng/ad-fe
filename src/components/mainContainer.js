/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component, propTypes } from 'react';
import { connect } from 'react-redux';
import CSSModule from 'react-css-modules';
import Todos from './todos';
import Doings from './doings';
import Dones from './dones';

import styles from './mainContainer.scss';

@connect(
    state => ({
        todoList: state.items.filter(item => item.state === 'ready'),
        doingList: state.items.filter(item => item.state === 'doing'),
        doneList: state.items.filter(item => item.state === 'done'),
        // todoList: state.items
    }),
    dispatch => ({

    })
)
@CSSModule(styles, { allowMultiple: true })
class MainContainer extends Component {
    render() {
        return (
            <div>
                <div styleName="container">
                    <Todos items={this.props.todoList}/>
                    <Doings/>
                    <Dones/>
                </div>
            </div>
        )
    }
}

export default MainContainer;