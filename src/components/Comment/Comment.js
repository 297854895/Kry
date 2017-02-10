import React, {Component} from 'react';
import Block from '../Block/Block';
import Style from './Comment.less';
import CommentList from './CommentList';
import CommentTextArea from './CommentTextArea';
export default class Comment extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  componentDidMount = () => {
    this.props.clientBoundAC.getArticleComment('MAIN', 8888);
  }
  render() {
    return (
      <div key="comment_container" className={Style.commentContainer}>
        <CommentTextArea {...this.props} />
        <div className={Style.CommentInfo}>
          <i>评论：</i>1234条
          <b>默认</b>
          <b>最热</b>
          <b>最新</b>
        </div>
        <CommentList {...this.props} />
      </div>
    );
  }
}
Comment.contextTypes = {
  router: Object
}
