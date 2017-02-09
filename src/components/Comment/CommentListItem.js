import React, {Component} from 'react';
import Style from './CommentListItem.less';
import PageMin from '../PageMin/PageMin';
export default class CommentListItem extends Component {
  constructor(props, context) {
    super(props);
    this.context;
    this.state = {
      commentShow: false
    }
  }
  handleComment = (data) => {
    if (!data || data.length === 0) return;
    const output = [];
    data.forEach((item, idx) => {
      output.push(
        <li key={'comment-comment-' + item.ccid ? item.ccid : '' + idx}><b>{item.userName ? item.userName : 'N/A'}：</b>{item.context ? item.context : 'N/A'}</li>
      )
    });
    return (
      <ul className={Style.CommentListCommentCom}>
        {output}
        {output.length > 4 ? <PageMin /> : ''}
      </ul>);
  }
  replyComment = (cid) => {
    console.log(this.state.commentShow, cid);
    this.setState({commentShow: !this.state.commentShow});
  }
  componentDidUpdate = () => {
    if (this.state.commentShow) {
      this.refs.textarea.focus();
    }
  }
  render() {
    return (
      <li className={Style.commentListItem} key={this.props.data.cid + 'KrycommentItem'}>
        <span className={Style.commentListUserPic}>
          <img src="/static/img/userdefault.png"/>
        </span>
        <p className={Style.commentListUserName}>{this.props.data.userName ? this.props.data.userName : 'N/A'}</p>
        <p className={Style.commentListUserCon}>{this.props.data.context ? this.props.data.context : 'N/A'}</p>
        {this.handleComment(this.props.data.comment)}
        {this.state.commentShow ?
          <div className={Style.CommentTextAreaInput}>
            <textarea ref="textarea" placeholder="敢问少侠有何高见..."></textarea><div className={Style.CommentTextAreaHandle}>
              <span><i className="fa fa-smile-o"></i></span>
              <button className={Style.CommentTextAreaButton}>回复</button>
            </div>
          </div> : ''}
        <div className={Style.CommentListHandle}>
          <span><i className="fa fa-thumbs-o-up"></i>&nbsp;顶一下（{this.props.data.thumbNum ? this.props.data.thumbNum : 0}）</span>
          <span onClick={this.replyComment.bind(this, this.props.data.cid)}><i className="fa fa-mail-reply-all"></i>&nbsp;回复（{this.props.data.comNum ? this.props.data.comNum : 0}）</span>
          <b>{this.props.data.dateTime ? this.props.data.dateTime : 'N/A'}</b>
        </div>
      </li>
    );
  }
}
CommentListItem.contextTypes = {
  router: Object
}
