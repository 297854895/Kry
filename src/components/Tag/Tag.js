import React, {Component} from 'react';
import Block from '../Block/Block';
export default class Tag extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tagList = [
      <div key="tag-list-wrap" className="tag-list-wrap">
        <a href="javascript:;">Hi</a>
        <a href="javascript:;">Test</a>
        <a href="javascript:;">Hello</a>
        <a href="javascript:;">Ok</a>
      </div>
    ];
    const showChild = [
      <h1 key="tag-title" className="index-left-title">标签</h1>
    ].concat(tagList);
    return (
      <div key="index_tag">
        <Block _key="indexTag" _child={showChild} _type="tag" />
      </div>
    );
  }
}
