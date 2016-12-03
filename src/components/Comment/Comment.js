import React, {Component} from 'react';
import Block from '../Block/Block';
export default class Comment extends Component {
  constructor(props, context) {
    super(props);
    this.context;
  }
  componentDidMount = () => {
    var ds = document.createElement('script');
    var short_name = document.createElement('script');
    var com = document.createElement('div');
    ds.type = 'text/javascript';
    short_name.type = 'text/javascript';
    short_name.innerHTML = `var duoshuoQuery = {short_name:"kongruye"};`;
    ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    const iframeDuoshuo = document.getElementById('duoshuoContainer');
    const iframeBody = (iframeDuoshuo.document ? iframeDuoshuo.document : iframeDuoshuo.contentWindow.document ).getElementsByTagName('body')[0];
    const iframeHead = (iframeDuoshuo.document ? iframeDuoshuo.document : iframeDuoshuo.contentWindow.document ).getElementsByTagName('head')[0];

    iframeBody.style.margin = 0;
    com.innerHTML = `<div class="ds-recent-comments" data-num-items="5" data-show-avatars="1" data-show-time="1" data-show-title="1" data-show-admin="1" data-excerpt-length="70"></div>`
    iframeBody.appendChild(com);
    iframeBody.appendChild(short_name);
    iframeBody.appendChild(ds);
    const setIframeHeight = setInterval(()=>{
      const iframeDOM = document.getElementById('duoshuoContainer');
      if (!iframeDOM) {
        clearInterval(setIframeHeight);
      }
      if (iframeBody.offsetHeight > 50) {
        iframeDOM.style.height = iframeBody.offsetHeight + 'px';
        clearInterval(setIframeHeight);
      } else if (iframeBody.offsetHeight < 50){
        iframeDOM.style.height = iframeBody.offsetHeight + 'px';
        clearInterval(setIframeHeight);
      }
      const a_ = iframeBody.querySelectorAll('.ds-comment a');
      for (let each of a_) {
        each.style.color = '#666';
      }
    },100);
    iframeBody.onclick = (evt) => {
      if (setIframeHeight){
        clearInterval(setIframeHeight);
      }
      const turnFlag = evt.target.parentNode.getAttribute('class') === 'ds-thread-title';
      if (turnFlag) {
        let path = evt.target.getAttribute('href').substring(31);
        const _id = path.substring(0, path.indexOf('&'));
        path = '?' + path.substring(path.indexOf('&') + 1).replace('#comments', '&' + _id);
        this.context.router.push({pathname: '/article', search: path, hash: '#comments'});
        return false;
      }
    }
  }
  render() {
    const commentList = [
      <ul key="comment-list-wrap" className="comment-list-wrap">
        <iframe id="duoshuoContainer" style={{border: 'none', width: '100%', height: '50px'}}>

        </iframe>
      </ul>
    ];
    const showChild = [
      <h1 key="hot-title" className="index-left-title">最新评论</h1>
    ].concat(commentList);
    return (
      <div key="index_comment">
        <Block _key="indexComment" _child={showChild} _type="comment" />
      </div>
    );
  }
}
Comment.contextTypes = {
  router: Object
}
