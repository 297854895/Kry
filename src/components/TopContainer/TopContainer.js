import React, {Component} from 'react';
import TopBar from '../TopBar/TopBar';
import NavBar from '../NavBar/NavBar';
export default class TopContainer extends Component {
  render() {
    return (
      <div key="TopContainer" className="TopContainer">
        <TopBar key="TopBar" />
        <div key="TopContainer-img" className="TopContainer-img">
          <img className="center" src="/static/img/jjx.png"/>
        </div>
        <NavBar key="NavBar" {...this.props}/>
      </div>
    );
  }
}
