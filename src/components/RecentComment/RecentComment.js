import React, {Component} from 'react';
import Block from '../Block/Block';
import RecentCommentItem from './RecentCommentItem';
export default class RecentComment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const output = [];
    output.push(<RecentCommentItem key="RecentCommentItem1" {...this.props} data={{username: '空如也', cid: 1, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem key="RecentCommentItem12" {...this.props} data={{username: '空如也', cid: 2, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem key="RecentCommentItem13" {...this.props} data={{username: '空如也', cid: 3, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem key="RecentCommentItem14" {...this.props} data={{username: '空如也', cid: 4, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    output.push(<RecentCommentItem key="RecentCommentItem15" {...this.props} data={{username: '空如也', cid: 5, aid: 8888, title: '这是标题标题标题', time: '2017-03-04', context: '心中藏着一把火'}} />);
    const showChild = [
      <h1 key="hot-title" className="index-left-title">最新评论</h1>
    ].concat(output);
    return (
      <div key="index_rece_comment">
        <Block _key="indexComment" _child={showChild} _type="comment" />
      </div>
    );
  }
}
