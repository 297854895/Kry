import React, {Component, PropTypes} from 'react';
export default class Novel extends Component {
  static propTypes = {
    novel: PropTypes.object,
    novelBoundAC: PropTypes.object
  }
  showContainer = (evt) =>{
    const NovelRight = document.querySelectorAll('.Novel-right')[0];
    const classLength = NovelRight.getAttribute('class').length;
    const NovelRightButton = document.querySelectorAll('.Novel-right-button');
    const _type = evt.target.getAttribute('data-type');
    const state_type = this.props.novel.get('rightShow');
    let evtClass = evt.target.getAttribute('class');
    if (classLength === 11) {
      NovelRight.setAttribute('class', 'Novel-right ' + 'Novel-right-active');
      if (evtClass) {
        evt.target.setAttribute('class', 'Novel-right-button Novel-right-button-active');
      }else {
        evt.target.parentNode.setAttribute('class', 'Novel-right-button Novel-right-button-active');
      }
      this.props.novelBoundAC.setRightShow(_type);
    } else {
      for(const button of Array.from(NovelRightButton)){
        button.setAttribute('class', 'Novel-right-button');
      }
      if (_type === state_type) {
        NovelRight.setAttribute('class', 'Novel-right');
      } else {
        this.props.novelBoundAC.setRightShow(_type);
        if (evtClass) {
          evt.target.setAttribute('class', 'Novel-right-button Novel-right-button-active');
        }else {
          evt.target.parentNode.setAttribute('class', 'Novel-right-button Novel-right-button-active');
        }
      }
    }
  }
  render() {
    const state_type = this.props.novel.get('rightShow');
    let show_title;
    if (state_type === 'list') {
      show_title = [
        <h1 key="Novel-right-list" className="Novel-right-title">目录</h1>
      ]
    }else if (state_type === 'comment') {
      show_title = [
        <h1 key="Novel-right-comment" className="Novel-right-title">评论</h1>
      ]
    }else if (state_type === 'set') {
      show_title = [
        <h1 key="Novel-right-set" className="Novel-right-title">设置</h1>
      ]
    }
    return (
      <div>
        <div className="Novel-right">
          <ul className="Novel-right-button-container">
            <li className="Novel-right-button" onClick={this.showContainer} title="目录" data-type="list">
              <img src="/static/img/novel-menu-mulu.png" data-type="list" />
            </li>
            <li className="Novel-right-button" onClick={this.showContainer} title="评论" data-type="comment">
              <img src="/static/img/novel-menu-comment.png" data-type="comment" />
            </li>
            <li className="Novel-right-button" onClick={this.showContainer} title="设置" data-type="set">
              <img src="/static/img/novel-menu-set.png" data-type="set" />
            </li>
            <li className="Novel-right-button" title="点赞">
              <img src="/static/img/novel-menu-thumb.png" />
            </li>
          </ul>
          <div className="Novel-right-container">
            {show_title}
          </div>
        </div>
      </div>
    );
  }
}
