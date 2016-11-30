import React, {Component} from 'react';

export default class Loading extends Component {
  render() {
    const myLoading = [
      <div key="Loading-0" className="Loading-0"></div>,
      <div key="Loading-1" className="Loading-1"></div>,
      <div key="Loading-2" className="Loading-2"></div>
    ];
    return (
      <div key="Loading" className="Loading">
        {myLoading}
      </div>
    );
  }
}
