import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import Block from '../Block/Block';

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.clientBoundAC.getHomePageArticle({index: 1, size: 10, type: 'list'});
  }
  LinkTo = (search) => {
    this.props.clientBoundAC.UpdateClientArticleShowInfo({
      type: search.type,
      _id: search._id
    })
    this.props.router.push({pathname: '/article', search: `?type=${search.type}&_id=${search._id}`});
  }
  parseTagFn = (tag) => {
    const output = [];
    tag.forEach((item, idx) => {
      output.push(<li key={"articleList-key" + item + idx}>{item}</li>)
    });
    return output;
  }
  render() {
    let articleList = this.props.client.getIn(['homePageArticleList']);
    articleList = articleList.size > 0 ? articleList.toJS() : '';
    if (!articleList) return null;
    const showChild = [];
    for (let data of articleList.data) {
      showChild.push(
        <Block key={"indexarticle-key" + data._id} _key={"indexarticle-" + data._id} _child={[
          <div key={"article-wrap-By" + data._id}>
            <div key="article-time-0" className="article-time"><p>{data.createTime.substring(0, 10)}</p>{data.dayInfo}</div>
            <div className="article-title">
              <TitleIcon />
              <a onClick={this.LinkTo.bind(this, {type: data.type, _id: data._id})}>{data.title ? data.title : ''}</a>
            </div>
            <div className="article-img">
              <img src={data.imgUrl} />
              <div className="article-img-mask">
                <div className="article-img-fadeIn blur"></div>
                <a onClick={this.LinkTo.bind(this, {type: data.type, _id: data._id})}>浏览详情</a>
              </div>
            </div>
            <div className="article-intro">
              {data.intro ? data.intro : ''}
            </div>
            <div className="article-info">
              <ul className="article-info-tag">
                {data.tag.length > 0 ? this.parseTagFn(data.tag) : ''}
              </ul>
              <div className="article-info-info">
                <div>
                  <i className="fa fa-heart"></i>
                  <span>{data.heart}</span>
                </div>
                <div>
                  <i className="fa fa-comments"></i>
                  <span>{data.commentNum}</span>
                </div>
              </div>
            </div>
          </div>]} _type="article" />
      );
    }
    return (
      <div key="index_article">
        {showChild}
      </div>
    );
  }
}
