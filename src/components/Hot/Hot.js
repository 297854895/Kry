import React, {Component} from 'react';
import Block from '../Block/Block';
import Loading from '../Loading/Loading';
import {Link} from 'react-router';

export default class Hot extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.clientBoundAC.getArticleListByType('GET_ARTICLE_RECOMMEND', {type: 'recommend'});
  }
  render() {
    let recommendList = this.props.client.get('articleRecommend');
    const output = []
    if (recommendList.size === 0) {
      output.push(<div key="recommendList-loading" style={{height: '50px'}}></div>);
      output.push(<Loading key="recommendList-loading-loa" />);
    } else {
      recommendList.forEach((item, idx) => {
        output.push(
          <li title={item.get('title')} className="readList" key={`hot-readList-${idx}`}>
            <div></div><b style={{background: `url("/static/img/recommendnum.png") 0 -${idx * 31}px no-repeat`}}></b><Link to={`/article?type=${item.get('type')}&_id=${item.get('_id')}`}>{item.get('title')}</Link>
          </li>
        );
      });
    }
    const readList = [
      <ul key="hot-readlist" style={{marginTop: '20px', marginBottom: '50px'}}>
        {output}
      </ul>
    ];
    const showChild = [
      <h1 key="hot-title" className="index-left-title">推荐阅读</h1>
    ].concat(readList);
    return (
      <div key="index_hot">
        <Block _key="indexHot" _child={showChild} _type="hot" />
      </div>
    );
  }
}
