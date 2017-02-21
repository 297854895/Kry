import React, {Component} from 'react';
import Style from './Like.less';

export default class Like extends Component {
  render() {
    return (
      <div key="like-container" className={Style.Like}>
        <span>
          <i className="fa fa-heart-o"></i>
        </span>
      </div>
    );
  }
}
