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
