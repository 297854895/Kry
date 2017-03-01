import React, {Component} from 'react';
import Style from './CommentList.less';
import Page from '../Page/Page';

import CommentListItem from './CommentListItem';
export default class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const com = this.props.data.data;
    const output = [];
    com.forEach((item, idx) => {
      output.push(
        <CommentListItem {...this.props} data={item} key={'comlist' + idx} />
      );
    });
    return (
      <ul key="comment_container-list" className={Style.commentListContainer}>
        {output}
        {output.length > 10 ? <Page data={{index: this.props.data.index, size: this.props.data.size, total: this.props.data.total}} /> : ''}
      </ul>
    );
  }
}
