import React, {Component} from 'react';
import Style from './CommentListItem.less';
import PageMin from '../PageMin/PageMin';
import Notification from '../Notification/Notification.js';
export default class CommentListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentShow: false,
      faceShow: false,
      comment: ''
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
  commentChange = () => {
    const value = this.refs.textarea.value;
    if (value.length > 200) {
      this.refs.textarea.value = this.state.comment;
      return;
    }
    this.setState({faceShow: this.state.faceShow, comment: value, commentShow: this.state.commentShow,});
  }
  showFace = () => {
    this.setState({faceShow: !this.state.faceShow, commentShow: this.state.commentShow, comment: this.state.comment});
  }
  clickFace(num) {
    this.refs.textarea.value = this.refs.textarea.value + "[" + (num > 9 ? num : '0' + num) + "]";
    this.refs.textarea.focus();
    this.commentChange();
    this.setState({faceShow: false, commentShow: this.state.commentShow, comment: this.refs.textarea.value});
  }
  returnFace = () => {
    const output = [];
    for (let num = 0; num < 40; num ++) {
      output.push(<li className="comment-face-item" key={'face-num-' + num} onClick={this.clickFace.bind(this, num)}>
          <img src={`/static/img/qq/${num > 9 ? num : '0' + num }.gif`}/>
        </li>)
    }
    return (<ul className="comment-face" style={{left: '180px', bottom: '52px'}}>
      {output}
    </ul>);
  }
  replyComment = (cid) => {
    console.log(this.state.commentShow, cid);
    this.setState({commentShow: !this.state.commentShow, faceShow: this.state.commentShow ? this.state.faceShow : false, comment: this.state.comment});
  }
  componentDidUpdate = () => {
    if (this.state.commentShow) {
      this.refs.textarea.focus();
    }
  }
  publish = () => {
    const name = this.refs.name.value;
    const comment = this.state.comment;
    if (!name) {
      Notification({
        type: 'danger',
        context: '少侠大可留名之后再作评论...',
      });
      return;
    }
    if (!comment || comment.length <= 0) {
      Notification({
        type: 'danger',
        context: '少侠所言当真是玄之又玄，可否通俗几分...',
      });
      return;
    }
    console.log({comment: comment, name: name});
  }
  render() {
    return (
      <li className={Style.commentListItem} key={this.props.data._id + 'KrycommentItem'}>
        <span className={Style.commentListUserPic}>
          <img src={`/static/img/userpic/${this.props.data.authPic === 1 ? '1.png' : this.props.data.authPic + '.jpg'}`}/>
        </span>
        <p className={Style.commentListUserName}>{this.props.data.auth || 'N/A'}</p>
        <p className={Style.commentListUserCon}>{this.props.data.content || 'N/A'}</p>
        <div className={Style.CommentListHandle}>
          <span><i className="fa fa-thumbs-o-up"></i>&nbsp;顶一下（{this.props.data.thumbNum || 0}）</span>
          <span onClick={this.replyComment.bind(this, this.props.data._id)}><i className="fa fa-mail-reply-all"></i>&nbsp;回复（{this.props.data.comNum || 0}）</span>
          <b>{this.props.data.createTime || 'N/A'}</b>
        </div>
      </li>
    );
  }
}
