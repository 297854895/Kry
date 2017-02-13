import React, {Component} from 'react';
import Style from './NovelComment.less';
import NovelCommentItem from './NovelCommentItem';

export default class NovelComment extends Component {
  render() {
    return (
      <div key="NovelrightItem">
        <h1>评论</h1>
        <div className={Style.NovelCommentText}>
          <div className={Style.NovelCommentWrap}>
            <textarea maxLength={84}></textarea>
            <span className={Style.NovelCommentWordNum}>
              0&nbsp;/&nbsp;84&nbsp;
            </span>
          </div>
          <div className={Style.NovelCommentLeave}>
            <label>留名</label><input placeholder="少侠请留名" />
            <b>评论</b>
          </div>
        </div>
        <ul className={Style.NovelComment}>
          <NovelCommentItem />
          <NovelCommentItem />
          <NovelCommentItem />
          <NovelCommentItem />
          <NovelCommentItem />
        </ul>
      </div>
    );
  }
}
