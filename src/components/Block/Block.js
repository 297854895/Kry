import React, {Component} from 'react';
export default class Block extends Component {
  render() {
    const _Type = this.props._type;
    const _TypeDetails = this.props._typed;
    const _child = this.props._child;
    const _list = this.props._list;
    return (
      <div key={this.props._key ? this.props._key : ''} className={_list && _list === 'list' ? 'Block Block-border' : 'Block'} style={_Type === 'article' ? (_TypeDetails === 'true' ? {borderRight: '2px solid #302f2f',padding: '30px 35px', width: '960px'} : {borderRight: '2px solid #302f2f',padding: '30px 35px'}) : {}}>
        {_Type === 'article' ? '' : <img className="Block-index-left-hb" src="/static/img/huabian2.png" style={_Type === 'intro' ? {transform: 'rotate(180deg)'} : {right: 0, bottom: 0}}/>}
        {_child}
      </div>
    );
  }
}
