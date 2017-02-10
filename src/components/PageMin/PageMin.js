import React, {Component} from 'react';
import Style from './PageMin.less';
export default class PageMin extends Component {
  constructor(props, context) {
    super(props);
    this.context;
    this.state = {
      current: 1,
      total: 37
    }
  }
  render() {
    return (
      <div className={Style.PageMinContainer}>
        <b>共&nbsp;370&nbsp;条回复</b>
        <span className={Style.PageMinTurnTo}>
        <input placeholder="页码" value={this.state.current} /><button>跳转</button>
        </span>
        <span className={Style.PageMinTurn}><i className="fa fa-angle-right"></i></span>
        <span className={Style.PageMinCenter}>{this.state.total}/{this.state.current}</span>
        <span className={Style.PageMinTurn}><i className="fa fa-angle-left"></i></span>
      </div>
    );
  }
}
PageMin.contextTypes = {
  router: Object
}
