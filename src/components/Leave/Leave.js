import React, {Component} from 'react';
import Style from './Leave.less';

export default class Leave extends Component {
  render() {
    return (
      <div className="Center center" key="leave-container">
        <span className="filter-list-title">雁过留声</span>
        <div className={Style.Leave}>

        </div>
      </div>
    );
  }
}
