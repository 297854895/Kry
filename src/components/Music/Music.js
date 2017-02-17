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
  showMenu = (type) => {
    this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
      path: ['musicMenuType'],
      value: type
    });
    if (this.props.music.get('menuShow') && this.props.music.get('musicMenuType') !== type) return;
    this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
      path: ['menuShow'],
      value: !this.props.music.get('menuShow')
    });
  }
  search = () => {
    const key = this.refs.searchInput.value;
    if (key) {
      this.props.musicBoundAc.searchByKey(
        {
          type: 1,
          s: key,
          limit: 50
        }
      );
    }
  }
  returnMusicTitle = (menuShowType) => {
    let output = [];
    let concatChild = [];
    let titleType;
    switch (menuShowType) {
      case 'playList':
        titleType = 'music';
        concatChild.push('播放列表');
        break;
      case 'searchList':
        titleType = 'search';
        concatChild.push('搜索');
        concatChild.push(
          <div className={styles.musicSearchWrap} key="musicSearchWrap">
            <input ref="searchInput" placeholder="请输入歌曲名称..." /><i key="music-search-input" className="fa fa-search" title="搜索" onClick={this.search}></i>
          </div>);
        break;
      case 'recommendList':
        titleType = 'star';
        concatChild.push('推荐');
        break;
      default:
        titleType = 'music';
        concatChild.push('播放列表');
        break;
    }
    output.push(<i key="music-menu-title" className={`fa fa-${titleType}`}></i>);
    output = output.concat(concatChild);
    return output;
  }
  manageMenuShow = (menuShowType) => {
    switch (menuShowType) {
      case 'playList':
        return this.playList();
      case 'searchList':
        return this.searchList();
      case 'recommendList':
        return this.recommendList();
      default:
        return this.playList();
    }
  }
  recommendList = () => {
    return <ul>this is recommendWrap</ul>
  }
  searchList = () => {
    return <ul>this is search list</ul>;
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
    return <ul>{PlayList}</ul>;
  }
  render() {
    const menuShowType = this.props.music.get('musicMenuType');
    const musicShow = this.props.music.get('musicShow');
    const menuShow = this.props.music.get('menuShow');
    const play = this.props.music.get('play');
    return (
      <div key="Music" className={styles.Music} style={{left: musicShow ? '0' : '-550px'}}>
        <div className={styles.musicPane}>
          <div className={styles.musicImg}>
            <img src="http://musicdata.baidu.com/data2/pic/ed58ab93ec08650f765bc40500ba47b1/273945524/273945524.jpg@s_0,w_90"/>
          </div>
          <div className={styles.musicInfo}>
            <p>东风破</p>
            <span>周杰伦</span>
          </div>
          <div className={styles.musicHandle}>
            <div className={styles.musicProgress}>
              <a className={styles.musicProgressTimeBt}>
                <div></div>
              </a>
              <div className={styles.musicProgressTimeinfo}>
                00:00
              </div>
            </div>
            <i title="上一曲" className="fa fa-backward"></i>
            <i title={play ? '暂停' : '播放'} className={`fa fa-${play ? 'stop' : 'play'}`}></i>
            <i title="下一曲" className="fa fa-forward"></i>
          </div>
        </div>
        <div className={styles.musicButton} onClick={this.showMusic}>
          <i className="fa fa-angle-right" style={{transform: musicShow ? 'rotate(180deg)' : 'rotate(0deg)'}}></i>
        </div>
        <div className={styles.musicMenuIconWrap}>
          <div className={styles.musicMenuIcon} onClick={this.showMenu.bind(this, 'playList')}>
            <i className="fa fa-list-alt"></i>&nbsp;列表
          </div>
          <div className={styles.musicMenuIcon} onClick={this.showMenu.bind(this, 'searchList')}>
            <i className="fa fa-search"></i>&nbsp;搜索
          </div>
          <div className={styles.musicMenuIcon} onClick={this.showMenu.bind(this, 'recommendList')}>
            <i className="fa fa-star"></i>&nbsp;推荐
          </div>
        </div>
        <div className={styles.musicMenuContainer} style={{top: !menuShow ? '0' : '-500px', height: !menuShow ? '0' : '500px'}}>
          <div className={styles.musicMenuTitle}>
            {this.returnMusicTitle(menuShowType)}
          </div>
          <div className={styles.musicMenu}>
            {this.manageMenuShow(menuShowType)}
          </div>
        </div>
      </div>
    );
  }
}
