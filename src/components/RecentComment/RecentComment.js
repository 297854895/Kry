import React, {Component} from 'react';
import Block from '../Block/Block';
import RecentCommentItem from './RecentCommentItem';
export default class RecentComment extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  render() {
    const output = [];
    output.push(<RecentCommentItem {...this.props} data={{username: '空如也', cid: 1, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem {...this.props} data={{username: '空如也', cid: 1, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem {...this.props} data={{username: '空如也', cid: 1, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem {...this.props} data={{username: '空如也', cid: 1, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem {...this.props} data={{username: '空如也', cid: 1, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    const showChild = [
      <h1 key="hot-title" className="index-left-title">最新评论</h1>
    ].concat(output);
    return (
      <div key="index_comment">
        <Block _key="indexComment" _child={showChild} _type="comment" />
      </div>
    );
  }
}
RecentComment.contextTypes = {
  router: Object
}
