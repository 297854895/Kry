import React, {Component} from 'react';
import Style from './NovelPage.less';

export default class NovelPage extends Component {
  render() {
    return (
      <div key="NovelPage" className={Style.pageCon}>
        <span title="上一页"><i className="fa fa-angle-left"></i></span>
        <b>1&nbsp;/&nbsp;777</b>
        <span title="下一页"><i className="fa fa-angle-right"></i></span>
        <div>翻页</div>
        <input placeholder="页码" maxLength={4}/>
      </div>
    );
  }
}
