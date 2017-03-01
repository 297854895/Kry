import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import Block from '../Block/Block';
import Like from '../Like/Like';
import Comment from '../Comment/Comment';
import Loading from '../Loading/Loading';
import Style from './Article.less';
import {fromJS} from 'immutable';
import marked from 'marked';
import hljs from 'highlight.js';

export default class Article extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let articleinfo = this.props.client.getIn(['currentArticle']);
    if (!articleinfo) {
      articleinfo = {};
      const searchArr = window.location.search.split('&');
      searchArr.forEach((item) => {
        if (item.indexOf('type=') > -1) {
          articleinfo.type = item.substring(item.indexOf('type=') + 5);
          return;
        } else if (item.indexOf('id=') > -1) {
          articleinfo._id = item.substring(item.indexOf('_id=') + 4);
          return;
        }
      });
      this.props.clientBoundAC.UpdateClientArticleShowInfo(articleinfo);
      articleinfo = fromJS(articleinfo);
    }
    // 取文章数据
    this.props.clientBoundAC.getArticleDetails({type: 'details', _id: articleinfo.get('_id')});
    // 取评论数据
    this.props.clientBoundAC.getArticleComment(articleinfo.get('_id'), 1, 10);
  }
  componentDidUpdate() {
    if (this.refs.markdownText) {
      marked.setOptions({
        highlight: function(code){
          return hljs.highlightAuto(code).value;
        }
      });
      this.refs.markdownText.innerHTML = marked(this.props.client.getIn(['articleDetails','content']));
    }
  }
  render() {
    let ArticleData = this.props.client.get('articleDetails');
    const Article_ = [];
    if (ArticleData.size === 0 ) {
      Article_.push(
        <div key="loading-article" style={{width: '960px', height: '480px', position: 'relative'}}>
          <Loading />
        </div>
      );
    } else {
      ArticleData = ArticleData.toJS();
      Article_.push(
        <Block key={"indexarticle-key0"} _key={"indexarticle-0"} _child={[
          <div key={"article-wrap-By0"}>
            <div key="title" className="article-title" style={{marginTop: '10px'}}>
              <TitleIcon />
              <a style={{fontSize: '18px', fontWeight: 'bold', color: '#555'}}>{ArticleData.title}</a>
            </div>
            <div key="info" className="article-title">
              <i className="fa fa-clock-o"></i><span>{ArticleData.createTime.substring(0, 10)}&nbsp;{ArticleData.dayInfo}</span>
              <i className="fa fa-heart"></i><span>{ArticleData.heart}</span>
              <i className="fa fa-comments"></i><span>{ArticleData.commentNum}</span>
              <i className="fa fa-user"></i><span>{ArticleData.auth}</span>
            </div>
            <div className={Style.articleImg} style={{width: 'initial', height: '450px'}}>
              <img src={ArticleData.imgUrl} style={{width: '100%', height: '450px'}} />
            </div>
            <div className={Style.articleContent} ref="markdownText">
            </div>
            <Like />
          </div>
        ]} _type="article" _typed="true" />
      );
    }
    return (
      <div key="article-details-container" className="Center center" ref="article">
        {Article_}
        <Comment {...this.props}/>
      </div>
    );
  }
}
