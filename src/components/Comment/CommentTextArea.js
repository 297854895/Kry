import React, {Component} from 'react';
import Style from './CommentTextArea.less';
import Notification from '../Notification/Notification.js';
export default class CommentTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceShow: false,
      comment: ''
    };
  }
  componentDidMount = () => {
    this.refs.textarea.focus();
  }
  commentChange = () => {
    const value = this.refs.textarea.value;
    if (value.length > 500) {
      this.refs.textarea.value = this.state.comment;
      return;
    }
    this.setState({faceShow: this.state.faceShow, comment: value});
  }
  showFace = () => {
    this.setState({faceShow: !this.state.faceShow, comment: this.state.comment});
  }
  clickFace(num) {
    this.refs.textarea.value = this.refs.textarea.value + "[" + (num > 9 ? num : '0' + num) + "]";
    this.refs.textarea.focus();
    this.commentChange();
    this.setState({faceShow: false, comment: this.refs.textarea.value});
  }
  returnFace = () => {
    const output = [];
    for (let num = 0; num < 40; num ++) {
      output.push(<li className="comment-face-item" key={'face-num-' + num} onClick={this.clickFace.bind(this, num)}>
          <img src={`/static/img/qq/${num > 9 ? num : '0' + num }.gif`}/>
        </li>)
    }
    return (<ul className="comment-face">
      {output}
    </ul>);
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
      <div className={Style.CommentTextArea}>
        <span className={Style.CommentTextAreaUserPic}>
          <img src="/static/img/userdefault.png"/>
        </span>
        <div className={Style.CommentTextAreaInput}>
          <textarea maxLength={500} onChange={this.commentChange} ref="textarea" placeholder="敢问少侠有何高见..."></textarea>
          <span className={Style.CommentTextNum}>{this.state.comment.length}/500</span>
          <div className={Style.CommentTextAreaHandle}>
            <span><i onClick={this.showFace} className="fa fa-smile-o"></i></span>
            <div><input maxLength={7} placeholder="少侠请留名..." ref="name" /></div>
            <button className={Style.CommentTextAreaButton} onClick={this.publish}>发布</button>
          </div>
        </div>
        {this.state.faceShow ? this.returnFace() : ''}
      </div>
    );
  }
}
