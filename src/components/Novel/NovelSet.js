import React, {Component} from 'react';
import Style from './NovelSet.less';

export default class NovelSet extends Component {
  constructor(props) {
    super(props)
  }
  setColor = (options) => {
    this.props.novelBoundAC.setBackColor(options);
  }
  render() {
    const current_color = this.props.novel.getIn(['backColor']).color || '#efedee';
    const colorSet = [
      {
        label: '默认',
        color: '#efedee'
      },
      {
        label: '淡黄',
        color: '#f6f1e7'
      },
      {
        label: '浅绿',
        color: '#dff0d8'
      }
    ];
    const output = [];
    colorSet.forEach((item, idx) => {
      output.push(
        <li key={'novel-color-set-' + idx}>
          <div style={{background: item.color}} onClick={this.setColor.bind(this, item)}>
            <span>{item.label}</span>
          </div>
          { current_color === item.color ? <b className={Style.colorCurrent}><i className="fa fa-circle-o"></i></b> : ''}
        </li>
      )
    });
    return (
      <div key="NovelrightItem">
        <h1>设置</h1>
        <ul className={Style.NovelSetWrap}>
          <h3>颜色设置</h3>
          {output}
        </ul>
      </div>
    );
  }
}
