import React, {Component} from 'react';
import Style from './RecentCommentItem.less';
export default class RecentCommentItem extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  render() {
    return (
      <div className={Style.RecentCommentItem}>
        <div className={Style.RecentCommentItemIn}>
          <span className={Style.RecentCommentItemImg}>
            <img src="/static/img/userdefault.png"/>
          </span>
          <p><b>{this.props.data.username}</b>&nbsp;&nbsp;{this.props.data.time}</p>
          <p>在&nbsp;<a>{this.props.data.title}</a>&nbsp;中评论</p>
          <p>{this.props.data.context}</p>
        </div>
      </div>
    );
  }
}
RecentCommentItem.contextTypes = {
  router: Object
}
