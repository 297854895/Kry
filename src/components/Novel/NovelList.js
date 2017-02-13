import React, {Component} from 'react';
import Style from './NovelList.less';
import NovelPage from './NovelPage';

export default class NovelList extends Component {
  render() {
    return (
      <div key="NovelrightItem">
        <h1>目录</h1>
        <ul className={Style.NovelListUl}>
          <li>
            <i className="fa fa-circle-o"></i>&nbsp;第一章 上大幅黄金克
          </li>
          <li>
            <i className="fa fa-circle-o"></i>&nbsp;第二章 上大幅黄金克
          </li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第三章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第四章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第五章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第六章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第七章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第八章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第九章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十一章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十二章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十三章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十四章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十五章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十六章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十七章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十八章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第十九章 上大幅黄金克</li>
          <li><i className="fa fa-circle-o"></i>&nbsp;第二十章 上大幅黄金克</li>
        </ul>
        <div className={Style.Page}>
          <span>共&nbsp;1388&nbsp;章</span>
          <NovelPage />
        </div>
      </div>
    );
  }
}
