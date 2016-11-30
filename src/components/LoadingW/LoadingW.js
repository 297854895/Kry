import React, {Component} from 'react';

export default class LoadingW extends Component {
  render() {
    const myLoading = [
      <div key="Loading-0-w" className="Loading-0-w"></div>,
      <div key="Loading-1-w" className="Loading-1-w"></div>,
      <div key="Loading-2-w" className="Loading-2-w"></div>
    ];
    return (
      <div key="Loading-w" className="Loading">
        {myLoading}
      </div>
    );
  }
}
