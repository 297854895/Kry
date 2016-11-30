import React, {Component} from 'react';
import Block from '../Block/Block';
export default class Comment extends Component {
  render() {
    const commentList = [
      <ul key="comment-list-wrap" className="comment-list-wrap">
        <div className="ds-recent-comments" data-num-items="5" data-show-avatars="1" data-show-time="1" data-show-title="1" data-show-admin="1" data-excerpt-length="70"></div>
      </ul>
    ];
    const showChild = [
      <h1 key="hot-title" className="index-left-title">最新评论</h1>
    ].concat(commentList);
    return (
      <div key="index_comment">
        <Block _key="indexComment" _child={showChild} _type="comment" />
      </div>
    );
  }
}
