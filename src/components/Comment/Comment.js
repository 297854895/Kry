import React, {Component} from 'react';
import Block from '../Block/Block';
export default class Comment extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  render() {
    return (
      <div key="comment_container">
        this is comment_container
      </div>
    );
  }
}
Comment.contextTypes = {
  router: Object
}
