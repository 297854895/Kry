import React, {Component} from 'react';
import ReactDOM from 'react-dom';
export default class Modal extends Component {
  componentDidMount = () => {
    const nodes = ReactDOM.findDOMNode(this);
    setTimeout(() => {
      nodes.style.opacity = 1;
      nodes.style.bottom = '0px';
    }, 200);
  }
  render() {
    return (
      <div className="Modal"></div>
    );
  }
}
