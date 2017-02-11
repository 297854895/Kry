import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import replaceAll from '../../helpers/replaceAll';
export default class Code extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code')[0];
    const codeContainer = document.createElement('div');
    let testCode =
`const typeMap = {
  'success': {
    icon: 'fa-check-circle',
    color: '#3c763d',
    back: '#dff0d8',
    border: '#d6e9c6',
    text: 'Success'
  },
  'warn': {
    icon: 'fa-warning',
    color: '#8a6d3b',
    back: '#fcf8e3',
    border: '#faebcc',
    text: 'Warning'
  },
  'danger': {
    icon: 'fa-times-circle',
    color: '#a94442',
    back: '#f2dede',
    border: '#ebccd1',
    text: 'Danger'
  },
  'info': {
    icon: 'fa-info-circle',
    color: '#31708f',
    back: '#d9edf7',
    border: '#bce8f1',
    text: 'Tips'
  },
};
export default function Notification (options) {
  let autoCloseTimer;
  let DOM = document.getElementById('Kry-Notification-con');
  const addNoti = document.createElement('div');
  const addB = document.createElement('b');
  const addP = document.createElement('p');
  addNoti.className = 'Notification';
  addNoti.style.background = typeMap[options.type].back;
  addNoti.style.color = typeMap[options.type].color;
  addNoti.style.borderColor = typeMap[options.type].border;
  if (!DOM) {
    DOM = document.createElement('div');
    DOM.id = 'Kry-Notification-con';
    document.getElementsByTagName('body')[0].appendChild(DOM);
  }
  const closeBt = document.createElement('i');
  closeBt.className = 'fa fa-close Notification-close';
  closeBt.onclick = () => {
    addNoti.className = addNoti.className + ' blur';
    if (options.close) {
      clearTimeout(autoCloseTimer);
    }
    addNoti.style.height = '0';
    addNoti.style.opacity = '.3';
    closeBt.onclick = null;
    setTimeout(() => {
      DOM.removeChild(addNoti);
    }, 200);
  }
  addB.appendChild(closeBt);
  if (options.close) {
    autoCloseTimer = setTimeout(() => {
      addNoti.className = addNoti.className + ' blur';
      addNoti.style.height = '0';
      addNoti.style.opacity = '.3';
      closeBt.onclick = null;
      setTimeout(() => {
        DOM.removeChild(addNoti);
      }, 200);
    }, options.close);
  }
  addNoti.appendChild(addB);
  addNoti.appendChild(addP);
  DOM.appendChild(addNoti);
  setTimeout(() => {
    addNoti.style.opacity = 1;
    addNoti.style.right = '10px';
  }, 30);
}`;
    testCode = replaceAll(testCode, '<', '&lt;');
    testCode = replaceAll(testCode, '>', '&gt;');
    codeContainer.innerHTML = testCode;
    nodes.appendChild(codeContainer);
    hljs.highlightBlock(nodes);
  }
  render() {
    return (
      <div key="Code" className="Code" style={{paddingLeft: '50px'}}>
        <pre>
          <code className="javascript">

          </code>
        </pre>
      </div>
    );
  }
}
