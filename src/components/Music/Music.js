import React, {Component} from 'react';
import styles from './Music.less';
import LoadingW from '../LoadingW/LoadingW';

export default class Music extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curMus: {
        name: '',
        audio: '',
        artists: [
          {name: ''}
        ],
        album: {
          picUrl: ''
        }
      },
      curTime: '',
      duration: 0
    }
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
    this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
      path: ['loading'],
      value: true
    });
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
  enterSearch = (evt) => {
    if (evt.which === 13) {
      this.search();
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
            <input ref="searchInput" placeholder="请输入歌曲名称..." onKeyDown={this.enterSearch} /><i key="music-search-input" className="fa fa-search" title="搜索" onClick={this.search}></i>
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
  manageMenuShow = (menuShowType, loadingStatus, searchListData) => {
    switch (menuShowType) {
      case 'playList':
        return this.playList(loadingStatus);
      case 'searchList':
        return this.searchList(loadingStatus, searchListData);
      case 'recommendList':
        return this.recommendList(loadingStatus);
      default:
        return this.playList(loadingStatus);
    }
  }
  recommendList = (loadingStatus, data) => {
    const output = [];
    return (<ul><LoadingW></LoadingW></ul>);
  }
  searchList = (loadingStatus, data) => {
    // console.log('xxxxxxxxxxxxxxxxxxxxxxx', loadingStatus, data);
    const output = [];
    if (loadingStatus === 'timeout') {
      return <div key="timeout-searchlist" className={styles.noInfo}>请求超时啦...</div>;
    }
    if (!data) {
      return <ul>{loadingStatus ? <LoadingW /> : ''}</ul>;
    }
    if (data.songCount === 0 ) {
      output.push(
        <div key="noInfo-searchlist" className={styles.noInfo}>根本找不到少侠所输入的歌曲...</div>
      )
    } else {
      data.songs.forEach((item, idx) => {
        output.push(<li className={styles.musicPlayListItem} key={'searchList' + idx + item.id}>
          <span className={styles.musicNum}>{idx < 9 ? '0'+ (1 + idx) : idx + 1}</span>
          <span className={styles.musicName}>{item.name}</span>
          <span className={styles.song}>{item.artists[0].name}</span>
          <span className={styles.handle}>
            <i className="fa fa-play" title="播放" onClick={this.playMusic.bind(this, item)}></i>
            <i className="fa fa-heart" title="加入播放列表"></i>
          </span>
        </li>);
      });
    }

    return (<ul>{loadingStatus ? <LoadingW /> : output}</ul>);
  }
  playList = (loadingStatus, data) => {
    const musiclistdata = [
      {name: '东风破', song: '周杰伦'},
    ]
    const PlayList = [];
    musiclistdata.forEach((item, idx) => {
      PlayList.push(
        <li className={styles.musicPlayListItem} key={idx + 'music-play-list'}>
          <span className={styles.musicNum}>{idx < 9 ? '0'+ (1 + idx) : idx + 1}</span>
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
  handleCurMusic = (play) => {
    if (!this.state.curMus.audio) {
      console.log('没有歌曲');
      return;
    }
    if (play) {
      //暂停
      this.refs.player.pause();
      this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
        path: ['play'],
        value: false
      });
      return;
    }
    this.refs.player.play();
    this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
      path: ['play'],
      value: true
    });
  }
  toggleMusic = (action) => {
    console.log(action);
  }
  playMusic = (data) => {
    const oldSrc = this.refs.player.src;
    const thisSong = oldSrc === data.audio ? true : false;
    if (this.state.progressTimer) {
      clearInterval(this.state.progressTimer);
    }
    this.setState({
      curMus: data,
      curTime: '',
      duration: 0,
      progressTimer: ''
    });
    if (!thisSong) {
      const playTimer = setInterval(() => {
        if (this.refs.player.src !== oldSrc) {
          this.refs.player.play();
          this.playerTimeProgress();
          clearInterval(playTimer);
        }
      }, 100);
    } else {
      //重新播放
      this.refs.player.load();
      this.refs.player.play();
      this.playerTimeProgress();
    }
  }
  playerTimeProgress = () => {
    //设置播放状态为true
    this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
      path: ['play'],
      value: true
    });
    this.setState({
      curMus: this.state.curMus,
      curTime: this.refs.player.currentTime,
      duration: this.refs.player.duration,
      progressTimer: setInterval(() => {
        if (this.refs.player.currentTime === this.refs.player.duration) {
          //播放完成
          this.props.commonBoundAC.UpdateValue('UPDATE_VALUE', {
            path: ['play'],
            value: false
          });
          clearInterval(progressTimer);
        }
        this.setState({
          curMus: this.state.curMus,
          curTime: this.refs.player.currentTime,
          duration: this.refs.player.duration,
          progressTimer: this.state.progressTimer
        });
      }, 1000)
    });
  }
  timeToDoublue = (time) => {
    let min = parseInt(time / 60, 10);
    let sec = time % 60 <= 9 ? '0' + Math.ceil(time % 60) : Math.ceil(time % 60);
    if (sec === 60) {
      sec = '00';
      min += 1;
    }
    return ( min < 10 ? '0' +  min :  min) + ':' +  sec;
  }
  render() {
    const loadingStatus = this.props.music.get('loading');
    const menuShowType = this.props.music.get('musicMenuType');
    const musicShow = this.props.music.get('musicShow');
    const menuShow = this.props.music.get('menuShow');
    const play = this.props.music.get('play');
    const searchListData = this.props.music.get('searchList') ? this.props.music.get('searchList').toJS() : this.props.music.get('searchList');
    return (
      <div key="Music" className={styles.Music} style={{left: musicShow ? '0' : '-550px'}}>
        <audio style={{display: 'none'}} ref="player" src={this.state.curMus.audio ? this.state.curMus.audio : 'nosrc'}></audio>
        <div className={styles.musicPane}>
          <div className={styles.musicImg}>
            {this.state.curMus.album.picUrl ? <img src={this.state.curMus.album.picUrl} /> : <div><span></span></div>}
          </div>
          <div className={styles.musicInfo}>
            <p>{this.state.curMus.name}</p>
            <span>{this.state.curMus.artists[0].name}</span>
          </div>
          <div className={styles.musicHandle}>
            <div className={styles.musicProgress}>
              <div className={styles.musicProgressIn} style={{width: this.state.duration > 0 ? (this.state.curTime / this.state.duration) * 100 + '%' : '0%'}}><a className={styles.musicProgressTimeBt}><div></div></a></div>
              <div className={styles.musicProgressTimeinfo}>
                {this.state.curTime ? this.timeToDoublue(this.state.curTime) : '00:00'}
              </div>
            </div>
            <i title="上一曲" className="fa fa-backward" onClick={this.toggleMusic.bind(this, 'prev')}></i>
            <i title={play ? '暂停' : '播放'} className={`fa fa-${play ? 'pause' : 'play'}`} onClick={this.handleCurMusic.bind(this, play)}></i>
            <i title="下一曲" className="fa fa-forward" onClick={this.toggleMusic.bind(this, 'next')}></i>
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
            {this.manageMenuShow(menuShowType, loadingStatus, searchListData)}
          </div>
        </div>
      </div>
    );
  }
}
