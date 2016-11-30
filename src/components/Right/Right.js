import React, {Component} from 'react';
import ArticleList from '../ArticleList/ArticleList';
export default class Right extends Component {
  render() {
    return (
      <div key="Right" className="Right" style={{width: this.props._width ? this.props._width : '50%'}}>
        <div className="Center-margin" style={{margin: '0 50px 0 0'}}>
          <ArticleList {...this.props} />
        </div>
      </div>
    );
  }
}
