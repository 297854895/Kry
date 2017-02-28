import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import LoadingW from '../LoadingW/LoadingW';
import styles from './NavBar.less';
export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () =>{
    this.setHideMenuWidth();
    window.onresize = () => {
      this.setHideMenuWidth();
    }
    this.props.clientBoundAC.getArticleListTop9();
  }
  LinkTo = (search) => {
    this.props.clientBoundAC.resetArticleDetails();
    this.props.clientBoundAC.UpdateClientArticleShowInfo({
      type: search.type,
      _id: search._id
    });
    this.props.router.push({pathname: '/article', search: `?type=${search.type}&_id=${search._id}`});
    this.props.clientBoundAC.getArticleDetails({type: 'details', _id: search._id});
  }
  setHideMenuWidth = () => {
    let winWidth = this.refs.NavBar.offsetWidth;
    const Menu = [this.refs.webHideMenu, this.refs.wordHideMenu, this.refs.novelHideMenu];
    //检测页面中是否存在滚动条
    if(document.body.style.overflow!="hidden"&&document.body.scroll!="no"&&document.body.offsetHeight<document.documentElement.clientHeight){
      //减去滚动条宽度
      winWidth -= this.getScrollbarWidth();
    }
    let _left = (winWidth - 1200)/2;
    if(winWidth <= 1200){
      _left = 0;
    }
    Menu.forEach((item, idx) => {
      item.style.width = `${winWidth}px`;
      item.style.left = `-${700 + 125 * idx + _left}px`;
    });
  }
  getScrollbarWidth = () => {
    //获取滚动条宽度
    var oP = document.createElement('p'),
        styles = {
            width: '100px',
            height: '100px',
            overflowY: 'scroll'
        }, i, scrollbarWidth;
    for (i in styles) oP.style[i] = styles[i];
    document.body.appendChild(oP);
    scrollbarWidth = oP.offsetWidth - oP.clientWidth;
    oP.remove();
    return scrollbarWidth;
  }
  render() {
    const articleListTop9 = this.props.client.get('articleListTop9');
    const webTec = [];
    const wordTec = [];
    if (articleListTop9.size === 0) {
      webTec.push(<LoadingW key="web-list-loading-w" />);
      wordTec.push(<LoadingW key="word-list-loading-w"/>);
    } else {
      let output = [];
      articleListTop9.get('web').toJS().forEach((item) => {
        output.push(<li key={`web-list-top-${item._id}`}><i className="fa fa-fire"></i><a onClick={this.LinkTo.bind(this, item)}>{item.title}</a></li>);
      });
      webTec.push(
        <ul key="web-list-top">
          {output}
        </ul>
      );
      output = [];
      articleListTop9.get('word').toJS().forEach((item) => {
        output.push(<li key={`word-list-top-${item._id}`}><i className="fa fa-fire"></i><a onClick={this.LinkTo.bind(this, item)}>{item.title}</a></li>);
      });
      wordTec.push(
        <ul key="word-list-top">
          {output}
        </ul>
      );
    }
    let _path = this.props.routes[1].path;
    if (_path === '/article') {
      _path = '/list';
    }
    const _type = window.location.search.substring(window.location.search.indexOf('type') + 5).substring(0, 3);
    return (
      <div className={`${styles.NavBar} NavBar`} ref="NavBar">
        <div className={`${styles.NavBarCenter} center`}>
          <ul className={styles.NavBarRight}>
            <li>
              <div className={styles.NavBarRightDiv} style={ !_path || _path ==='/home' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <Link className={styles.NavBarRightA} to="/" style={ !_path || _path ==='/home' ? {color: '#302f2f'} : {}}>首页</Link>
            </li>
            <li className={styles.NavBarRightMenu}>
              <div className={styles.NavBarRightDiv} style={ _type === 'web' && _path ==='/list' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <Link className={styles.NavBarRightA} to="/list?type=web" style={ _type === 'web' && _path ==='/list' ? {color: '#302f2f'} : {}}>前端攻城</Link>
              <div className={`${styles.NavBarHideMenu} NavBar-hide-menu`} ref="webHideMenu">
                {webTec}
              </div>
            </li>
            <li className={styles.NavBarRightMenu}>
              <div className={styles.NavBarRightDiv} style={ _type === 'wor' && _path ==='/list' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <Link className={styles.NavBarRightA} to="/list?type=word" style={ _type === 'wor' && _path ==='/list' ? {color: '#302f2f'} : {}}>污文弄墨</Link>
              <div className={`${styles.NavBarHideMenu} NavBar-hide-menu`} ref="wordHideMenu">
                {wordTec}
              </div>
            </li>
            <li className={styles.NavBarRightMenu}>
              <div className={styles.NavBarRightDiv} >
                <img src="/static/img/navbarback.png"/>
              </div>
              <Link className={styles.NavBarRightA} to="/novel">小说</Link>
              <div className={`${styles.NavBarHideMenu} NavBar-hide-menu`} ref="novelHideMenu">
              </div>
            </li>
            <li>
              <div className={styles.NavBarRightDiv} style={ _path ==='/leave' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <Link className={styles.NavBarRightA} to="/leave" style={ _path ==='/leave' ? {color: '#302f2f'} : {}}>雁过留声</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
