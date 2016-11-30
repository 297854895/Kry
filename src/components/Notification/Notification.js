import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
let hideDOM;
// componentDidMount = () => {
//   this.props.clientBoundAC.AddNotification({type: 'info', content: '这是er条信息'});
//   setTimeout(() => {
//     this.props.clientBoundAC.AddNotification({type: 'info', content: '这是3条信息'});
//     setTimeout(() => {
//       this.props.clientBoundAC.AddNotification({type: 'info', content: '这是4条信息'});
//     }, 1500);
//   }, 1500);
// }
export default class Notification extends Component {
  static propTypes = {
    client: PropTypes.object,
    clientBoundAC: PropTypes.object
  }
  componentDidUpdate = () => {
  	const nodes = ReactDOM.findDOMNode(this);
    if (nodes.childNodes.length > 0) {
      for (const _child of nodes.childNodes ) {
        setTimeout(() => {
          _child.style.opacity = 1;
          _child.style.right = '2px';
        }, 400);
        setTimeout(() => {
          _child.style.opacity = 0;
          _child.style.right = '-300px';
          hideDOM = '';
	    		hideDOM = '';
        }, 5000);
      }
      hideDOM = nodes.childNodes[0];
	    hideDOM = nodes.childNodes[0];
    }
  }
  hideNotification = () => {
  	if (hideDOM) {
  		hideDOM.style.opacity = 0;
	    hideDOM.style.right = '-300px';
	    setTimeout(() => {
	    	this.props.clientBoundAC.RemoveNotification();
	    }, 1);
  	}
  }
  returnNoti = () => {
    const NotArr = {
    	type: 'none'
    };
    if (this.props.client) {
      const _NotiList = this.props.client.getIn(['Notification']);
      if (_NotiList.size === 0 ) {
        NotArr.type = 'none';
      } else if (_NotiList.size === 1) {
        NotArr.type = _NotiList.getIn([0, 'type']);
        NotArr.content = _NotiList.getIn([0, 'content']);
      } else {
        this.hideNotification();
        NotArr.type = _NotiList.getIn([0, 'type']);
        NotArr.content = _NotiList.getIn([0, 'content']);
      }
    }
  	return NotArr;
  }
  render() {
  	const NotiInfo = this.returnNoti();
    return (
      <div className="notification-container" key="Notification-container">
        <div className={NotiInfo.type === 'none' ? '' : "Notification"} key="Notification-1">
            <div>{NotiInfo.type === 'none' ? '' : NotiInfo.content}</div>
          </div>
      </div>
    );
  }
}
