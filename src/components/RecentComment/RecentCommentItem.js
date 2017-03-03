import React, {Component} from 'react';
import Style from './RecentCommentItem.less';
export default class RecentCommentItem extends Component {
  constructor(props) {
    super(props);
  }
  LinkTo = (search) => {
    this.props.clientBoundAC.resetArticleDetails();
    this.props.clientBoundAC.UpdateClientArticleShowInfo({
      type: search.type,
      _id: search.aid
    });
    this.props.router.push({pathname: '/article', search: `?type=${search.type}&_id=${search.aid}`});
    //跳转获取文章详情
    this.props.clientBoundAC.getArticleDetails({type: 'details', _id: search.aid});
    //跳转获取文章评论
    this.props.clientBoundAC.getArticleComment(search.aid, 1, 10);
  }
  render() {
    return (
      <div className={Style.RecentCommentItem} key={'RecentCommentItem' + this.props.data._id}>
        <div className={Style.RecentCommentItemIn}>
          <span className={Style.RecentCommentItemImg}>
            <img src={`/static/img/userpic/${this.props.data.authPic == 1 ? '1.png' : this.props.data.authPic + '.jpg'}`}/>
          </span>
          <p><b>{this.props.data.auth}</b>&nbsp;&nbsp;{this.props.data.createTime.substring(0, 10)}</p>
          <p>在&nbsp;<a onClick={this.LinkTo.bind(this, this.props.data)}>{this.props.data.title}</a>&nbsp;中评论</p>
          <p>{this.props.data.content}</p>
        </div>
      </div>
    );
  }
}
