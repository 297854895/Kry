import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal/Modal';
export default class Mask extends Component {
  componentDidMount = () => {
    const _Mask = ReactDOM.findDOMNode(this);
    _Mask.style.left = 0;
    _Mask.style.top = 0;
    _Mask.style.width = '100%';
    _Mask.style.height = '100%';
    _Mask.style.background = 'rgba(0,0,0,0.36)';
  }
  render() {
    const clickData = this.props;
    let clickX = 0;
    let clickY = 0;
    if (clickData.clickinfo) {
      clickX = clickData.clickinfo.clientX;
      clickY = clickData.clickinfo.clientY;
    }
    return (
      <div key="Mask" className="Mask" style={{left: `${clickX}px`, top: `${clickY}px`}}>
        <Modal />
      </div>
    );
  }
}
