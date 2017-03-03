import React, {Component} from 'react';
import Style from './CommentTextArea.less';
import Notification from '../Notification/Notification.js';
import axios from 'axios';

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
    };
    const commentData = {type: this.props.type, title: this.props.title, content: comment, auth: name, authPic: this.refs.currentPic.getAttribute('data-num'), aid: this.props.client.getIn(['currentArticle', '_id'])}
    axios.post('/front/comment', commentData)
    .then(resp => {
      if (resp.status === 200) {
        Notification({
          type: 'success',
          context: '少侠高论果然非凡！',
          close: 2000
        });
        this.setState({faceShow: false, comment: ''});
        this.refs.textarea.value = '';
        commentData.createTime = resp.data.createTime;
        commentData._id = resp.data._id;
        this.props.clientBoundAC.pushComment(commentData);
      }
    })
    .catch(err => {
      console.error(err);
    })
    // {comment: comment, name: name, pic: this.refs.currentPic.getAttribute('data-num')};
  }
  toggleUserPicShow = () => {
    const status = this.refs.changePic.style.display;
    if (!status || status === 'none') {
      this.refs.changePic.style.display = 'block';
    } else {
      this.refs.changePic.style.display = 'none';
    }
  }
  changeUserPic = (data) => {
    this.refs.currentPic.src = data.src;
    this.refs.currentPic.setAttribute('data-num', data.num);
  }
  render() {
    return (
      <div className={Style.CommentTextArea}>
        <span className={Style.CommentTextAreaUserPic}>
          <img ref="currentPic" data-num={1} src="/static/img/userpic/1.png"/>
          <span onClick={this.toggleUserPicShow}>换头像</span>
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
        <div className={Style.CommentUserPic} ref="changePic">
          <div className={Style.sanjiao}></div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/1.png", num: 1})}>
            默认
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/2.jpg", num: 2})}>
            <img src="/static/img/userpic/2.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/3.jpg", num: 3})}>
            <img src="/static/img/userpic/3.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/4.jpg", num: 4})}>
            <img src="/static/img/userpic/4.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/5.jpg", num: 5})}>
            <img src="/static/img/userpic/5.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/6.jpg", num: 6})}>
            <img src="/static/img/userpic/6.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/7.jpg", num: 7})}>
            <img src="/static/img/userpic/7.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/8.jpg", num: 8})}>
            <img src="/static/img/userpic/8.jpg"/>
          </div>
          <div className={Style.picEach} onClick={this.changeUserPic.bind(this, {src: "/static/img/userpic/9.jpg", num: 9})}>
            <img src="/static/img/userpic/9.jpg"/>
          </div>
          <span onClick={this.toggleUserPicShow}>关闭</span>
        </div>
      </div>
    );
  }
}
