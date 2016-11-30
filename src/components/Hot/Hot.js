import React, {Component} from 'react';
import Block from '../Block/Block';
export default class Hot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const readList = [
      <ul key="hot-readlist" style={{marginTop: '20px', marginBottom: '50px'}}>
        <li className="readList" key="hot-readList-0"><div></div><b></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-1"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -31px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-2"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -62px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-3"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -93px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-4"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -124px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-5"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -155px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-6"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -186px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
        <li className="readList" key="hot-readList-7"><div></div><b style={{background: 'url("/static/img/recommendnum.png") 0 -219px no-repeat'}}></b><a href="javascript:;">是几款介绍</a></li>
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
