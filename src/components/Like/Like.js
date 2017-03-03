import React, {Component} from 'react';
import Style from './Like.less';
import axios from 'axios';
import Notification from '../Notification/Notification.js';


export default class Like extends Component {
  constructor(props) {
    super(props)
  }
  likeIt = () => {
    axios.get('/front/like', {params : {_id: this.props._id}})
          .then(resp => {
            Notification({
              type: 'success',
              context: '承蒙少侠认同！',
              close: 2000
            });
          })
          .catch(err => {
            console.error(err);
          });
  }
  render() {
    return (
      <div key="like-container" className={Style.Like}>
        <span>
          <i onClick={this.likeIt} className="fa fa-heart-o"></i>
        </span>
      </div>
    );
  }
}
