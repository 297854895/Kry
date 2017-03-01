import React, {Component} from 'react';
import style from './Wzq.less';
import Notification from '../Notification/Notification.js';

var chessBoard = [];
var wins   = [];
let count;
var myWin = [];
var computerWin = [];
const user = 1;
const computer = 2;
let firstXq;
let currentXq;
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
    for (var i = 0; i < 15; i++) {
  		chessBoard[i] = [];
    	wins[i] = [];
  		for (var j = 0; j < 15; j++) {
  			chessBoard[i][j] = 0;
      	wins[i][j] = [];
  		}
  	}
    /*计算有多少种赢法*/
  	count = 0;
  	for (var i = 0; i < 15; i++) { //横线五子
  		for (var j = 0; j < 11; j++) {
  			for (var k = 0; k < 5; k++) {
  				wins[i][j+k][count] = true;
  			}
  			count++;
  		}
  	}
  	for (var i = 0; i < 11; i++) { //竖线五子
  		for (var j = 0; j < 15; j++) {
  			for (var k = 0; k < 5; k++) {
  				wins[i+k][j][count] = true;
  			}
  			count++;
  		}
  	}
  	for (var i = 0; i < 11; i++) { //斜线(\)五子
  		for (var j = 0; j < 11; j++) {
  			for (var k = 0; k < 5; k++) {
  				wins[i+k][j+k][count] = true;
  			}
  			count++;
  		}
  	}
  	for (var i = 14; i >= 4; i--) { //斜线(/)五子
  		for (var j = 0; j < 11; j++) {
  			for (var k = 0; k < 5; k++) {
  				wins[i-k][j+k][count] = true;
  			}
  			count++;
  		}
  	}

  	for (var i = 0; i < count; i++) {
  		myWin[i] = 0;
  		computerWin[i] = 0;
  	}
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
  xq = (position) => {
    if (currentXq !== 'user') return;
    if (chessBoard[position.row][position.col] !== 0) return;
    chessBoard[position.row][position.col] = user;
    const qz = this.refs[`qz-${position.row}-${position.col}`];
    qz.style.background = `${firstXq === 'user' ? '#000' : '#fff'}`;
    qz.style.display = 'block';
  	for (var k = 0; k < count; k++) {
      if (wins[position.row][position.col][k]) {
        myWin[k]++;
        computerWin[k] = 6;
        if (myWin[k] === 5) {
          Notification({
            type: 'info',
            context: '少侠获胜...',
            close: 2000
          });
          this.setState({
            gameStatus: false
          });
        }
      }
    }
    currentXq = 'computer';
    this.wzqAI();
  }
  wzqAI = () => {
    var myScore = [];
  	var computerScore = [];
  	/*保存最大的分数和相应坐标*/
  	var max = 0;
  	var u = 0,v = 0;

  	/*棋盘每个点得分归零*/
  	for (var i = 0; i < 15; i++) {
  		myScore[i] = [];
  		computerScore[i] = [];
  		for (var j = 0; j < 15; j++) {
  			myScore[i][j] = 0;
  			computerScore[i][j] = 0;
  		}
  	}

  	/**/
  	for (var i = 0; i < 15; i++) {
  		for (var j = 0; j < 15; j++) {
  			if(chessBoard[i][j] == 0){

  				for (var k = 0; k < count; k++) {
  					if (wins[i][j][k]) {
  						switch(myWin[k]){
  							case 1 : myScore[i][j] += 200;break;
  							case 2 : myScore[i][j] += 500;break;
  							case 3 : myScore[i][j] += 2000;break;
  							case 4 : myScore[i][j] += 10000;break;
  						}
  						switch(computerWin[k]){
  								case 1 : computerScore[i][j] += 220;break;
  								case 2 : computerScore[i][j] += 520;break;
  								case 3 : computerScore[i][j] += 2200;break;
  								case 4 : computerScore[i][j] += 20000;break;
  						}
  					}
  				}

  				if (myScore[i][j] > max) {
  					max = myScore[i][j];
  					u = i;
  					v = j;
  				}else if (myScore[i][j] == max) {
  					if (computerScore[i][j] > computerScore[u][v]) {
  						u = i;
  						v = j;
  					}
  				}
  				if (computerScore[i][j] > max) {
  					max = computerScore[i][j];
  					u = i;
  					v = j;
  				}else if (computerScore[i][j] == max) {
  					if (myScore[i][j] > myScore[u][v]) {
  						u = i;
  						v = j;
  					}
  				}

  			}
  		}
  	}
  	if(u==0&&v==0&&chessBoard[7][7]==0){
  		u=7;
  		v=7;
  	}
  	chessBoard[u][v] = computer;
    if (!this.refs[`qz-${u}-${v}`]) {
      var timer = setInterval(() => {
        if (this.refs[`qz-${u}-${v}`]) {
          clearInterval(timer);
          const qz = this.refs[`qz-${u}-${v}`];
          qz.style.background = `${firstXq === 'computer' ? '#000' : '#fff'}`;
          qz.style.display = 'block';

          for (var k = 0; k < count; k++) {
            if (wins[u][v][k]) {
              computerWin[k]++;
              myWin[k] = 6;
              if (computerWin[k] == 5) {
                Notification({
                  type: 'info',
                  context: '电脑获胜...',
                  close: 2000
                });
                this.setState({
                  gameStatus: false
                });
              }
            }
          }
          currentXq = 'user'
        }
      }, 100);
    } else {
      const qz = this.refs[`qz-${u}-${v}`];
      qz.style.background = `${firstXq === 'computer' ? '#000' : '#fff'}`;
      qz.style.display = 'block';

      for (var k = 0; k < count; k++) {
        if (wins[u][v][k]) {
          computerWin[k]++;
          myWin[k] = 6;
          if (computerWin[k] == 5) {
            Notification({
              type: 'info',
              context: '电脑获胜...',
              close: 2000
            });
            this.setState({
              gameStatus: false
            });
          }
        }
      }
      currentXq = 'user'
    }
  }
  game = () => {
    const qp = [];
    const xq = [];
    for (let num = 0; num < 196; num ++) {
      qp.push(<li key={"wzqqipan-" + num} className={style.qp} style={{marginTop: num < 14 ? '0' : '-1px'}}></li>);
    }
    for (let row = 0; row < 15; row ++) {
      for (let col = 0; col < 15; col ++) {
        xq.push(
          <li key={`wzqqz-${row}-${col}`} className={style.xq} onClick={this.xq.bind(this, {row: row, col: col})} style={{marginTop: row === 0 ? '0' : '-1px'}}>
            <div className={style.pos}>
              <div className={style.pos0}></div>
              <div className={style.pos1}></div>
              <div className={style.pos2}></div>
              <div className={style.pos3}></div>
            </div>
            <div ref={`qz-${row}-${col}`} className={style.qz}></div>
          </li>
        );
      }
    }
    if (Math.random()*100 > 50) {
      firstXq = 'user';
      currentXq = 'user';
    } else {
      firstXq = 'computer';
      currentXq = 'computer';
      this.wzqAI();
    }
    return (
      <div id={style.qpWrap}>
				<ul id={style.qpwzq}>
          {qp}
				</ul>
        <ul id={style.qpxq}>
          {xq}
        </ul>
        <div className={style.pane}>
          <p>
            先手：<span>{firstXq === 'user' ? '玩家' : '电脑'}</span>
          </p>
          <p>
            后手：<span>{firstXq === 'computer' ? '玩家' : '电脑'}</span>
          </p>
        </div>
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
