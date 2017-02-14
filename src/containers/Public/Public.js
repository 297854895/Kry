import React, {Component} from 'react';
import Music from '../../components/Music/Music';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAC from '../../redux/actions/client';
import * as commonAC from '../../redux/actions/common';
@connect(
  state => ({client: state.client, music: state.music}),
  dispatch=>({clientBoundAC: bindActionCreators(clientAC, dispatch), commonBoundAC: bindActionCreators(commonAC, dispatch)}))
export default class Public extends Component {
  render() {
    const children = this.props;
    return (
      <div key="public-containers">
         <Music {...this.props}/>
        {React.cloneElement(children.children, this.props)}
      </div>
    );
  }
}
