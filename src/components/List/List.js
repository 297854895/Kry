import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import {Link} from 'react-router';
import Block from '../Block/Block';
import Loading from '../Loading/Loading';
import Page from '../Page/Page';
export default class List extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.props.clientBoundAC.getArticleListByType('GET_ARTICLE_BYTYPE', {filterKey: nextProps.data, index: 1, size: 10, type: 'list'});
    }
  }
  componentDidMount() {
    this.props.clientBoundAC.getArticleListByType('GET_ARTICLE_BYTYPE', {filterKey: this.props.data, index: 1, size: 10, type: 'list'});
  }
  componentDidUpdate() {
    scrollTo(0,352);
  }
  returnTag(data) {
    let str = '';
    data.forEach((item) => {
      str += `${item} `
    });
    return str;
  }
  togglePage = (page) => {
    this.props.clientBoundAC.getArticleListByType('GET_ARTICLE_BYTYPE', {filterKey: this.props.data, index: page, size: 10, type: 'list'});
  }
  LinkTo = (search) => {
    this.props.clientBoundAC.resetArticleDetails();
    this.props.clientBoundAC.UpdateClientArticleShowInfo({
      type: search.type,
      _id: search._id
    });
    this.props.router.push({pathname: '/article', search: `?type=${search.type}&_id=${search._id}`});
    //跳转获取文章详情
    this.props.clientBoundAC.getArticleDetails({type: 'details', _id: search._id});
    //跳转获取文章评论
    this.props.clientBoundAC.getArticleComment(search._id, 1, 10);
  }
  render() {
    let articledata = this.props.client.getIn(['articleListByType', 'data']);
    if (!articledata) return (<div key="loading-article-list" style={{width: '800px', height: '480px', position: 'relative'}}>
      <Loading />
    </div>);
    articledata = articledata.size > 0 ? articledata.toJS() : [];
    const pageData = this.props.client.getIn(['articleListByType']);
    const output = [];
    articledata.forEach((item) => {
      output.push(
        <Block key={"indexarticle-key0" + item._id} _key={"indexarticle-0" + item._id} _child={[
          <div key={`indexarticle-key${item._id}-list`}>
            <div className="article-list-left">
              <img src={item.imgUrl}/>
            </div>
            <div className="article-list-right">
              <h1><a onClick={this.LinkTo.bind(this, item)}>{item.title}</a></h1>
              <div>
                <span>
                  <i className="fa fa-clock-o"></i>&nbsp;{item.createTime.substring(0, 10)}
                </span>
                <span>
                  <i className="fa fa-tags"></i>&nbsp;{this.returnTag(item.tag.length > 0 ? item.tag : [])}
                </span>
              </div>
              <p>{item.intro}</p>
            </div>
          </div>
        ]} _type="article" _list="list" />
      )
    });
    return (
      <div key="article-list-container" className="Center center">
        <div key="Right" className="Right" style={{width: '800px'}}>
          <div className="Center-margin" style={{margin: '0 50px 0 0'}}>
            <span className="filter-list-title">
              <img src={this.props.data === 'web' ? "/static/img/book.png" : "/static/img/flower.png"} />
              <span>{this.props.data === 'web' ? '前端攻城' : '污文弄墨'}</span>
            </span>
            {output}
            <Page data={{total: pageData.get('total'), size: pageData.get('size'), current: pageData.get('index')}} togglePage={this.togglePage}/>
          </div>
        </div>
        <div key="Left" className="Left" style={{width: '400px'}}>
          <div className="Center-margin">
          </div>
        </div>
      </div>
    );
  }
}
