import React, {Component} from 'react';
import Style from './CommentList.less';
import Page from '../Page/Page';

import CommentListItem from './CommentListItem';
export default class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  togglePage = (page) => {
    const _id = this.props.client.getIn(['currentArticle', '_id']);
    this.props.clientBoundAC.getArticleComment(_id, page, 10, this.props.type);
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
        {this.props.data.total > 10 ? <Page togglePage={this.togglePage} data={{current: this.props.data.index, size: this.props.data.size, total: this.props.data.total}} /> : ''}
      </ul>
    );
  }
}
