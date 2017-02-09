import React, {Component} from 'react';
import Style from './CommentTextArea.less';
export default class CommentTextArea extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  componentDidMount = () => {
    this.refs.textarea.focus();
  }
  render() {
    return (
      <div className={Style.CommentTextArea}>
        <span className={Style.CommentTextAreaUserPic}>
          <img src="/static/img/userdefault.png"/>
        </span>
        <div className={Style.CommentTextAreaInput}>
          <textarea ref="textarea" placeholder="敢问少侠有何高见..."></textarea><div className={Style.CommentTextAreaHandle}>
            <span><i className="fa fa-smile-o"></i></span>
            <button className={Style.CommentTextAreaButton}>发布</button>
          </div>
        </div>
      </div>
    );
  }
}
CommentTextArea.contextTypes = {
  router: Object
}
