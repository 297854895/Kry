import React, {Component} from 'react';
import Style from './PageMin.less';
export default class PageMin extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  render() {
    return (
      <div className={Style.PageMinContainer}>
        <span className={Style.PageMinTurn}><i className="fa fa-angle-left"></i></span>
        <span className={Style.PageMinCenter}>1/37</span>
        <span className={Style.PageMinTurn}><i className="fa fa-angle-right"></i></span>
        <span className={Style.PageMinTurnTo}>
          <input placeholder="页码" value={1} /><button>跳转</button>
        </span>
      </div>
    );
  }
}
PageMin.contextTypes = {
  router: Object
}
