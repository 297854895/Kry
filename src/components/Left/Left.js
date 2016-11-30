import React, {Component} from 'react';
import Intro from '../Intro/Intro';
import Hot from '../Hot/Hot';
import Tag from '../Tag/Tag';
import Comment from '../Comment/Comment';
export default class Left extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key="Left" className="Left" style={{width: this.props._width ? this.props._width : '50%'}}>
        <div className="Center-margin">
          <Intro />
          <Hot />
          <Tag />
          <Comment />
        </div>
      </div>
    );
  }
}
