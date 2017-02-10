import React, {Component} from 'react';
import Style from './CommentList.less';
import Page from '../Page/Page';
import CommentListItem from './CommentListItem';
export default class CommentList extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  render() {
    const com = this.props.client.getIn(['currentArticleComment']);
    const output = [];
    if (com && com.size > 0) {
      com.forEach((item, idx) => {
        output.push(
          <CommentListItem {...this.props} data={item.toJS()} key={'comlist' + idx} />
        );
      });
    }
    return (
      <ul key="comment_container-list" className={Style.commentListContainer}>
        {output}
        {output.length > 0 ? <Page data={{total: 100, size: 5, current: 1}} /> : ''}
      </ul>
    );
  }
}
CommentList.contextTypes = {
  router: Object
}
