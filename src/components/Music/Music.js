import React, {Component} from 'react';
export default class Music extends Component {
  constructor(props) {
    super(props);
  }
  show = (evt) => {
    const _Music = document.querySelectorAll('.Music')[0];
    let type = evt.target.getAttribute('data-type');
    let img = evt.target;
    if (!type) {
      type = evt.target.parentNode.getAttribute('data-type');
    }
    if (!img.src) {
      img = evt.target.childNodes[0];
    }
    if (type === 'show') {
      _Music.style.left = 0;
      evt.target.setAttribute('data-type', 'hide');
      img.style.transform = 'rotate(180deg)';
    } else {
      _Music.style.left = '-550px';
      evt.target.setAttribute('data-type', 'show');
      img.style.transform = 'rotate(0deg)';
      const PlayList = document.querySelectorAll('.Music-playlist-container')[0];
      PlayList.style.top = 0;
      PlayList.style.height = 0;
      const MusicMenu = document.querySelectorAll('.Music-menu')[0];
      MusicMenu.setAttribute('data-type', 'show');
    }
  }
  showPlayList = (evt) => {
    let that = evt.target;
    let type = evt.target.getAttribute('data-type');
    const PlayList = document.querySelectorAll('.Music-playlist-container')[0];
    if (!type) {
      type = evt.target.parentNode.getAttribute('data-type');
      that = evt.target.parentNode;
    }
    if (type === 'show') {
      PlayList.style.top = '-500px';
      PlayList.style.height = '500px';
      that.setAttribute('data-type', 'hide');
    } else {
      PlayList.style.top = 0;
      PlayList.style.height = 0;
      that.setAttribute('data-type', 'show');
    }
  }
  playList = () => {
    const PlayList = [];
    return PlayList;
  }
  render() {
    console.log(123);
    return (
      <div key="Music" className="Music">
        <div className="Music-button" data-type="show" onClick={this.show}>
          <img src="/static/img/arr.png" />
        </div>
        <div className="Music-menu" data-type="show" onClick={this.showPlayList}>
          <img src="/static/img/icon-menu-menu.png" />
        </div>
        <div className="Music-playlist-container">
          <div className="Music-playlist-title"></div>
          <ul className="Music-playlist">
            {this.playList()}
          </ul>
        </div>
      </div>
    );
  }
}
