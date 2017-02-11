import React, {Component} from 'react';
import TopContainer from '../../components/TopContainer/TopContainer';
import Bottom from '../../components/Bottom/Bottom';
import Leave_ from '../../components/Leave/Leave';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
@connect(
  state => ({client: state.client}),
  dispatch=>({clientBoundAC: bindActionCreators(clientAC, dispatch)}))
export default class Leave extends Component {
  render() {
    return (
      <div className="container">
      	<TopContainer {...this.props}/>
        <Leave_ />
        <Bottom />
      </div>
    );
  }
}
