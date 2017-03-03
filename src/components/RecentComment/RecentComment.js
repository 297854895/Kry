import React, {Component} from 'react';
import Block from '../Block/Block';
import Loading from '../Loading/Loading';

import RecentCommentItem from './RecentCommentItem';
export default class RecentComment extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.clientBoundAC.getCommentHome();
  }
  render() {
    let data = this.props.client.get('newcomment');
    const output = [];
    if (data === 'nocomment') {
      output.push(<div key="newcomment-loading" style={{height: '150px', lineHeight: '50px', textAlign: 'center'}}>暂无评论</div>);
    } else if (data.size === 0) {
      output.push(<div key="newcomment-loading" style={{height: '150px'}}></div>);
      output.push(<Loading key="newcomment-loading-loa" />);
    } else {
      data.toJS().forEach((item, idx) => {
        output.push(<RecentCommentItem key={`RecentCommentItem${idx}`} {...this.props} data={item} />);
      });
    }
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
