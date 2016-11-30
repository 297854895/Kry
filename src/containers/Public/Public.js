import React, {Component} from 'react';
import Notification from '../../components/Notification/Notification';
import Music from '../../components/Music/Music';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
@connect(
  state => ({client: state.client}),
  dispatch=>({clientBoundAC: bindActionCreators(clientAC, dispatch)}))
export default class Public extends Component {
  render() {
    const children = this.props;
    return (
      <div key="public-containers">
        <Notification {...this.props}/>
        <Music {...this.props}/>
        {React.cloneElement(children.children, this.props)}
      </div>
    );
  }
}
