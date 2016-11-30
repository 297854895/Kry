import React, {Component} from 'react';
import TopContainer from '../../components/TopContainer/TopContainer';
import Center from '../../components/Center/Center';
import Bottom from '../../components/Bottom/Bottom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
@connect(
  state => ({client: state.client}),
  dispatch=>({clientBoundAC: bindActionCreators(clientAC, dispatch)}))
export default class Index extends Component {
  render() {
    return (
      <div className="container">
      	<TopContainer {...this.props}/>
        <Center {...this.props}/>
        <Bottom />
      </div>
    );
  }
}
