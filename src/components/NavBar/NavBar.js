import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () =>{
    let winWidth = document.querySelectorAll('.NavBar')[0].offsetWidth;
    const Menu = document.querySelectorAll('.NavBar-hide-menu');
    //检测页面中是否存在滚动条
    if(document.body.style.overflow!="hidden"&&document.body.scroll!="no"&&document.body.offsetHeight<document.documentElement.clientHeight){
      //减去滚动条宽度
      winWidth -= this.getScrollbarWidth();
    }
    Menu[0].style.width = winWidth + 'px';
    Menu[1].style.width = winWidth + 'px';
    Menu[2].style.width = winWidth + 'px';
    let _left = (winWidth - 1200)/2;
    if(winWidth <= 1200){
      _left = 0;
    }
    Menu[0].style.left =  0 - 700 - _left  + 'px';
    Menu[1].style.left =  0 - 825 - _left  + 'px';
    Menu[2].style.left =  0 - 950 - _left  + 'px';
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
    let _path = this.props.routes[1].path;
    if (_path === '/article') {
      _path = '/list';
    }
    const _type = window.location.search.substring(window.location.search.indexOf('type') + 5).substring(0, 4);
    return (
      <div className="NavBar">
        <div className="NavBar-center center">
          <ul className="NavBar-right">
            <li>
              <div className="NavBar-right-div" style={ !_path || _path ==='/home' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <a className="NavBar-right-a" href="/" style={ !_path || _path ==='/home' ? {color: '#302f2f'} : {}}>首页</a>
            </li>
            <li className="NavBar-right-menu">
              <div className="NavBar-right-div" style={ _type === 'web' && _path ==='/list' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <a className="NavBar-right-a" href="/list?type=web" style={ _type === 'web' && _path ==='/list' ? {color: '#302f2f'} : {}}>前端攻城</a>
              <div className="NavBar-hide-menu">
                <ul>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                  <li>
                    <i className="fa fa-fire"></i><a href="/article?aid=1024&type=web">我是标题标题</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="NavBar-right-menu">
              <div className="NavBar-right-div" style={ _type === 'word' && _path ==='/list' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <a className="NavBar-right-a" href="/list?type=word" style={ _type === 'word' && _path ==='/list' ? {color: '#302f2f'} : {}}>污文弄墨</a>
              <div className="NavBar-hide-menu">

              </div>
            </li>
            <li className="NavBar-right-menu">
              <div className="NavBar-right-div" >
                <img src="/static/img/navbarback.png"/>
              </div>
              <a className="NavBar-right-a" href="/novel">小说</a>
              <div className="NavBar-hide-menu">

              </div>
            </li>
            <li>
              <div className="NavBar-right-div" style={ _path ==='/leave' ? {width: '100%'} : {}}>
                <img src="/static/img/navbarback.png"/>
              </div>
              <a className="NavBar-right-a" href="/leave" style={ _path ==='/leave' ? {color: '#302f2f'} : {}}>雁过留声</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
