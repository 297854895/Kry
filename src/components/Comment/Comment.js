import React, {Component} from 'react';
import Block from '../Block/Block';
import Style from './Comment.less';
import Loading from '../Loading/Loading';
import Page from '../Page/Page';

import CommentList from './CommentList';
import CommentTextArea from './CommentTextArea';
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'new'
    }
  }
  toggleCommentType = (data) => {
    if (this.state.type === data.type) return;
    this.setState({
      type: data.type
    });
    this.props.clientBoundAC.getArticleComment(data._id, 1, 10, data.type);
  }
  render() {
    let showFlag = false;
    const com = this.props.client.getIn(['currentArticleComment', 'data']);
    let showData;
    if (com && com.size > 0) {
      showFlag = true;
      showData = this.props.client.getIn(['currentArticleComment']).toJS();
    };
    let LoadingShow = [<div key="comment_container-list-loading" style={{width: '960px', height: '480px', position: 'relative'}}><Loading key="comment_container-list-loading-lo" /></div>]
    if (this.props.client.getIn(['currentArticleComment']) === 'nocomment') {
      LoadingShow = [<div key="comment-no-data">暂无数据,.,,,</div>]
    }
    return (
      <div key="comment_container" className={Style.commentContainer}>
        <CommentTextArea {...this.props} />
        {
          showFlag ?
          [<div className={Style.CommentInfo} key="comment-info-view">
            <i>评论：</i>&nbsp;{showData.total}&nbsp;条
            <b onClick={this.toggleCommentType.bind(this, {type: 'hot', _id: showData.data[0].aid})} className={this.state.type === 'hot' ? Style.active : ''}>最热</b>
            <b onClick={this.toggleCommentType.bind(this, {type: 'new', _id: showData.data[0].aid})} className={this.state.type === 'new' ? Style.active : ''}>最新</b>
          </div>,
          <CommentList key="comment-info-view-list" {...this.props} data={showData} type={this.state.type} />]
          :
          LoadingShow
        }
      </div>
    );
  }
}
