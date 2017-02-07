import React, {Component} from 'react';
import Block from '../Block/Block';
export default class RecentComment extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  render() {
    const showChild = [
      <h1 key="hot-title" className="index-left-title">最新评论</h1>
    ];
    return (
      <div key="index_comment">
        <Block _key="indexComment" _child={showChild} _type="comment" />
      </div>
    );
  }
}
Comment.contextTypes = {
  router: Object
}
