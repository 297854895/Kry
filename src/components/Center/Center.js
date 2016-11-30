import React, {Component} from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
export default class Center extends Component {
  render() {
    return (
      <div key="Center" className="Center center">
        <Left _width="400px" {...this.props} />
        <Right _width="800px" {...this.props}/>
      </div>
    );
  }
}
