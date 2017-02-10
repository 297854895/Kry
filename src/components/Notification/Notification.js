const typeMap = {
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
  let DOM = document.getElementById('Kry-Notification-con');
  const addNoti = document.createElement('div');
  addNoti.className = 'Notification';
  addNoti.style.background = typeMap[options.type].back;
  addNoti.style.color = typeMap[options.type].color;
  addNoti.style.borderColor = typeMap[options.type].border;
  if (!DOM) {
    DOM = document.createElement('div');
    DOM.id = 'Kry-Notification-con';
    document.getElementsByTagName('body')[0].appendChild(DOM);
  }
  addNoti.innerHTML =
  `<span class="Notification-icon"><i class="fa ${typeMap[options.type].icon}"></i></span>
   <b>${typeMap[options.type].text}${options.close ? '<i class="fa fa-close Notification-close"></i>' : ''}</b>
   <p>${options.context}</p>
  `;
  DOM.appendChild(addNoti);
  setTimeout(() => {
    addNoti.style.opacity = 1;
    addNoti.style.right = '10px';
  }, 30);
}
