/**
 * Created by mac on 2017/4/5.
 */
import CommonHeader from '../components/commonHeader';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    navMsg: state.router
})

const TopNav = connect(mapStateToProps)(CommonHeader);

export default TopNav;