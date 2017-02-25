import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import Block from '../Block/Block';
import Code from '../Code/Code';
import Like from '../Like/Like';
import Comment from '../Comment/Comment';
import Style from './Article.less';
import {fromJS} from 'immutable';
export default class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      articleinfo = fromJS(articleinfo);
    }
    const Article_ = [
      <Block key={"indexarticle-key0"} _key={"indexarticle-0"} _child={[
        <div key={"article-wrap-By0"}>
          <div key="title" className="article-title" style={{marginTop: '10px'}}>
            <TitleIcon />
            <a style={{fontSize: '18px', fontWeight: 'bold', color: '#555'}}>这是标题这是标题这是标题这是标题这是标题这是标题这是标题</a>
          </div>
          <div key="info" className="article-title">
            <i className="fa fa-clock-o"></i><span>2016-10-06 24:00:00</span>
            <i className="fa fa-heart"></i><span>2016</span>
            <i className="fa fa-comments"></i><span>2016</span>
            <i className="fa fa-user"></i><span>空如也</span>
          </div>
          <div className={Style.articleImg} style={{width: 'initial', height: '450px'}}>
            <img src={`/static/img/test2.jpg`} style={{width: '100%', height: '450px'}} />
          </div>
          <div className={Style.articleContent}>
            <div className="article-section">
              <a>壹</a>
              <span className={Style.articleseName}>第一章</span>
            </div>
            <p>PP鸭 图片压缩神器，帮你的图片减减肥。
                PP鸭整合了业内最优秀的数种开源的图片压缩算法，会自动根据图片特征自动选择压缩参数。只需要将图片拖入PP鸭，就能自动批量压缩，省时省心。
                官网：http://ppduck.com/
                特点：极致的图片压缩效果，经过长时间反复调校和对比各种算法，PP鸭在品质，体积，速度三者间，帮你定位完美的平衡点
                优点：
                跨平台图片压缩软件（win&Mac），图片压缩能够在保证质量的情况下使图片容量更小。需要付费激活，但能免费试用10次（可循环）。
                适合独立的小项目，在发布之前进行手动优化，省时简单</p>
            <div className="article-section">
              <a>贰</a>
              <span className={Style.articleseName}>第二章</span>
            </div>
            <Code />
            <Like />
          </div>
        </div>
      ]} _type="article" _typed="true" />
    ];
    return (
      <div key="article-details-container" className="Center center" ref="article">
        {Article_}
        <Comment {...this.props}/>
      </div>
    );
  }
}
