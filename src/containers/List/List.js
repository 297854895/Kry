import React, {Component} from 'react';
import TopContainer from '../../components/TopContainer/TopContainer';
import Bottom from '../../components/Bottom/Bottom';
import List from '../../components/List/List';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
@connect(
  state => ({client: state.client}),
  dispatch=>({clientBoundAC: bindActionCreators(clientAC, dispatch)}))
export default class Leave extends Component {
  render() {
    const type = window.location.search.substring(window.location.search.indexOf('type') + 5)
    if (type !== 'word' && type !== 'web') {
      window.location.href='/';
      return;
    }
    return (
      <div className="container">
      	<TopContainer {...this.props} />
        <List {...this.props} data={type}/>
        <Bottom />
      </div>
    );
  }
}
