/**
 * Created by mac on 2017/4/1.
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { Route, Link } from 'react-router-dom';

const Text = ({ match }) => (
    <div>
        {match.params.text}：{match.params.name}
    </div>
)

class Other extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        console.log(this.props);
        return (
            <div>
                <Button.Group>
                    <Button type="primary">
                        <Link to={`${match.url}/第1个/Allen`}>
                            第1个
                        </Link>
                    </Button>
                    <Button type="primary">
                        <Link to={`${match.url}/第2个/Tony`}>
                            第2个
                        </Link>
                    </Button>
                    <Button type="primary">
                        <Link to={`${match.url}/第3个/Bill`}>
                            第3个
                        </Link>
                    </Button>
                </Button.Group>
                <div>
                    <Route path={`${match.url}/:text/:name`} component={Text}/>
                </div>
            </div>
        )
    }
}

export default Other;