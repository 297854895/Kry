import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import {Link} from 'react-router';
import Block from '../Block/Block';
export default class ArticleList extends Component {
  constructor(props) {
    super(props);
  }
  LinkTo = (search) => {
    this.props.clientBoundAC.UpdateClientArticleShowInfo({
      type: search.type,
      id: search.id
    });
    this.props.router.push({pathname: '/article', search: `?type=${search.type}&${search.type === 'web' ? 'w' : 'a'}id=${search.id}`});
  }
  render() {
    const owData = [
      {id: 8888, type: 'web', tag: [{name: 'Hi', href: 'javascript:;'}, {name: 'Test', href: 'javascript:;'}], view: 999, comment: 999, img: 'test2.jpg', title: '这是标题这是标题标题标题', intro: '在此期间，习近平总书记主持召开深改组会议27次，审议文件162份，为全面深化改革“立柱架梁”。中央深改组第二十七次会议指出，从评估的情况看，全面深化改革实施进展顺利，各领域标志性、支柱性改革任务基本上已经推出，重要领域和关键环节改革取得突破性进展，全面深化改革、全面依法治国的主体框架正在逐步确立。'},
      {id: 9999, type: 'word', tag: [{name: 'Hi', href: 'javascript:;'}, {name: 'Test', href: 'javascript:;'}], view: 999, comment: 999, img: 'test1.jpg', title: '这是标题这是标题标题标题', intro: '在此期间，习近平总书记主持召开深改组会议27次，审议文件162份，为全面深化改革“立柱架梁”。中央深改组第二十七次会议指出，从评估的情况看，全面深化改革实施进展顺利，各领域标志性、支柱性改革任务基本上已经推出，重要领域和关键环节改革取得突破性进展，全面深化改革、全面依法治国的主体框架正在逐步确立。'}
    ];
    const showChild = [];
    for (let data of owData) {
      showChild.push(
        <Block key={"indexarticle-key" + data.id} _key={"indexarticle-" + data.id} _child={[
          <div key={"article-wrap-By" + data.id}>
            <div key="article-time-0" className="article-time"><p>2016-09-25</p>周五 雷阵雨</div>
            <div className="article-title">
              <TitleIcon />
              <a onClick={this.LinkTo.bind(this, {type: data.type, id: data.id})}>{data.title ? data.title : ''}</a>
            </div>
            <div className="article-img">
              <img src={`/static/img/${data.img ? data.img : ''}`} />
              <div className="article-img-mask">
                <div className="article-img-fadeIn blur"></div>
                <a onClick={this.LinkTo.bind(this, {type: data.type, id: data.id})}>浏览详情</a>
              </div>
            </div>
            <div className="article-intro">
              {data.intro ? data.intro : ''}
            </div>
            <div className="article-info">
              <ul className="article-info-tag">
                <li>Test</li>
                <li>Hi</li>
              </ul>
              <div className="article-info-info">
                <div>
                  <i className="fa fa-heart"></i>
                  <span>{data.view ? data.view : ''}</span>
                </div>
                <div>
                  <i className="fa fa-comments"></i>
                  <span>{data.comment ? data.comment : ''}</span>
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
