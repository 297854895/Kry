import React, {Component} from 'react';
import styles from './Music.less';
export default class Music extends Component {
  constructor(props) {
    super(props);
  }
  showMusic = () => {
    if (this.props.music.get('musicShow')) {
      this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
        path: ['musicShow'],
        value: false
      });
      this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
        path: ['menuShow'],
        value: false
      });
    }else {
      this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
        path: ['musicShow'],
        value: !this.props.music.get('musicShow')
      });
    }
  }
  showMenu = () => {
    this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
      path: ['menuShow'],
      value: !this.props.music.get('menuShow')
    });
  }
  playList = () => {
    const musiclistdata = [
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
      {name: '东风破', song: '周杰伦'},
    ]
    const PlayList = [];
    musiclistdata.forEach((item, idx) => {
      PlayList.push(
        <li className={styles.musicPlayListItem} key={idx + 'music-play-list'}>
          <span className={styles.musicNum}>{idx < 10 ? '0'+idx : idx}</span>
          <span className={styles.musicName}>{item.name}</span>
          <span className={styles.song}>{item.song}</span>
          <span className={styles.handle}>
            <i className="fa fa-play" title="播放"></i>
            <i className="fa fa-trash" title="删除"></i>
          </span>
        </li>
      );
    });
    return PlayList;
  }
  render() {
    const musicShow = this.props.music.get('musicShow');
    const menuShow = this.props.music.get('menuShow');
    const play = this.props.music.get('play');
    return (
      <div key="Music" className={styles.Music} style={{left: musicShow ? '0' : '-550px'}}>
        <div className={styles.musicPane}>
          <div className={styles.musicImg}></div>
          <div className={styles.musicInfo}>
            <p>东风破</p>
            <span>周杰伦</span>
          </div>
          <div className={styles.musicHandle}>
            <div className={styles.musicProgress}></div>
            <i title="上一曲" className="fa fa-backward"></i>
            <i title={play ? '暂停' : '播放'} className={`fa fa-${play ? 'stop' : 'play'}`}></i>
            <i title="下一曲" className="fa fa-forward"></i>
          </div>
        </div>
        <div className={styles.musicButton} onClick={this.showMusic}>
          <i className="fa fa-angle-right" style={{transform: musicShow ? 'rotate(180deg)' : 'rotate(0deg)'}}></i>
        </div>
        <div className={styles.musicMenuIcon} onClick={this.showMenu}>
          <i className="fa fa-list"></i>
        </div>
        <div className={styles.musicMenuContainer} style={{top: !menuShow ? '0' : '-500px', height: !menuShow ? '0' : '500px'}}>
          <div className={styles.musicMenuTitle}>
            <i className="fa fa-music"></i>&nbsp;&nbsp;播放列表
          </div>
          <div className={styles.musicMenu}>
            <ul>
              {this.playList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
