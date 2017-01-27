import React, {Component} from 'react';
import Novel_ from '../../components/Novel/Novel';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as novelAC from '../../redux/actions/novel';
@connect(
  state => ({novel: state.novel}),
  dispatch=>({novelBoundAC: bindActionCreators(novelAC, dispatch)}))
export default class Novel extends Component{
  render() {
    return (
      <div>
        <Novel_ {...this.props}/>
      </div>
    );
  }
}
