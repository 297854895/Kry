import React, {Component} from 'react';
import style from './Wzq.less';

export default class Wzq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: false
    }
  }
  backIndex = () => {
    this.props.router.push({pathname: '/'});
  }
  startGame = () => {
    this.setState({
      gameStatus: true
    });
  }
  startPane = () => {
    return (
      <div className={style.startPane}>
        <h1>五子棋</h1>
        <div onClick={this.startGame}>开始游戏</div>
        <div onClick={this.backIndex}>返回主页</div>
      </div>
    );
  }
  game = () => {
    const qp = [];
    const xq = [];
    for (let num = 0; num < 196; num ++) {
      qp.push(<li className={style.qp} style={{marginTop: num < 14 ? '0' : '-1px'}}></li>);
      xq.push(<li className={style.xq} style={{marginTop: num < 14 ? '0' : '-1px'}}>
        <div className={style.pos}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </li>);
    }
    return (
      <div id={style.qpWrap}>
				<ul id={style.qpwzq}>
          {qp}
				</ul>
        <ul id={style.qpxq}>
          {xq}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div className={style.WzqWrap}>
        {this.state.gameStatus ? this.game() : this.startPane()}
      </div>
    );
  }
}
