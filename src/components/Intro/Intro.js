import React, {Component} from 'react';
import Block from '../Block/Block';
export default class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const showChild = [
      <div key="infoshow-wrap">
        <div key="info-img" className="info-img">
          <img key="info-img-img" className="center" src="/static/img/jjx.png" style={{width: "120px"}}/>
        </div>
        <div key="info-intro" className="info-intro">
          <p><i className="fa fa-quote-left" style={{marginRight: '10px'}}></i>这是一个还算有梦想的前端攻城师</p>
          <p>胡作非为的地方<i className="fa fa-quote-right" style={{marginLeft: '10px'}}></i></p>
        </div>
      </div>
    ]
    return (
      <div key="index_info">
        <Block _key="indexInfo" _child={showChild} _type="intro" />
      </div>
    );
  }
}
