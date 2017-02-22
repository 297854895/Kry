import React, {Component} from 'react';
import Style from './Leave.less';

export default class Leave extends Component {
  constructor(props) {
    super(props)
  }
  turnTo = (path) => {
    this.props.router.push({pathname: path});
  }
  render() {
    return (
      <div className="Center center" key="leave-container">
        <span className="filter-list-title">雁过留声</span>
        <div className={Style.Leave}>
          <div className={Style.LeaveItem} onClick={this.turnTo.bind(this, '/wzq')}>
            五子棋
          </div>
        </div>
      </div>
    );
  }
}
