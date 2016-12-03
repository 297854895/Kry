import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import Block from '../Block/Block';
import Code from '../Code/Code';
export default class Article extends Component {
  constructor(props) {
    super(props);
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
    iframeBody.style.margin = 0;
    iframeBody.style.width = '960px';
    com.innerHTML = `<div class="ds-thread" data-thread-key="${parseInt(window.location.search.substring(14))}" data-title="请替换成文章的标题" data-url="${window.location.href}" style={{width: '960px'}}></div>`
    iframeBody.appendChild(com);
    iframeBody.appendChild(short_name);
    iframeBody.appendChild(ds);
    const setIframeHeight = setInterval(()=>{
      const iframeDOM = document.getElementById('duoshuoContainer');
      if(iframeBody.offsetHeight === 0) {
        return;
      }
      if (iframeBody.offsetHeight > 150) {
        iframeDOM.style.height = iframeBody.offsetHeight + 'px';
        clearInterval(setIframeHeight);
      } else if (iframeBody.offsetHeight < 150){
        iframeDOM.style.height = iframeBody.offsetHeight + 'px';
        clearInterval(setIframeHeight);
      }
    },100);
  }
  render() {
    const Article_ = [
      <Block key={"indexarticle-key0"} _key={"indexarticle-0"} _child={[
        <div key={"article-wrap-By0"}>
          <div key="title" className="article-title" style={{marginTop: '10px'}}>
            <TitleIcon />
            <a style={{fontSize: '18px', fontWeight: 'bold', color: '#555'}}>这是标题这是标题这是标题这是标题这是标题这是标题这是标题</a>
          </div>
          <div key="info" className="article-title">
            <img src="/static/img/icon-time.png" /><span>2016-10-06 24:00:00</span>
            <img src="/static/img/iconfont-read.png" /><span>2016</span>
            <img src="/static/img/icon-comment.png" /><span>2016</span>
            <img src="/static/img/icon-author.png" /><span>空如也</span>
          </div>
          <div className="article-img" style={{width: 'initial', height: '450px'}}>
            <img src={`/static/img/test2.jpg`} style={{width: '100%', height: '450px'}} />
          </div>
          <div className="article-content">
            <div className="article-section">前</div>
            <p>在此期间，习近平总书记主持召开深改组会议27次，审议文件162份，为全面深化改革“立柱架梁”。中央深改组第二十七次会议指出，从评估的情况看，全面深化改革实施进展顺利，各领域标志性、支柱性改革任务基本上已经推出，重要领域和关键环节改革取得突破性进展，全面深化改革、全面依法治国的主体框架正在逐步确立。</p>
            <p>PP鸭 图片压缩神器，帮你的图片减减肥。
                PP鸭整合了业内最优秀的数种开源的图片压缩算法，会自动根据图片特征自动选择压缩参数。只需要将图片拖入PP鸭，就能自动批量压缩，省时省心。
                官网：http://ppduck.com/
                特点：极致的图片压缩效果，经过长时间反复调校和对比各种算法，PP鸭在品质，体积，速度三者间，帮你定位完美的平衡点
                优点：
                跨平台图片压缩软件（win&Mac），图片压缩能够在保证质量的情况下使图片容量更小。需要付费激活，但能免费试用10次（可循环）。
                适合独立的小项目，在发布之前进行手动优化，省时简单</p>
            <div className="article-section">壹</div>
            <p>PP鸭 图片压缩神器，帮你的图片减减肥。
                PP鸭整合了业内最优秀的数种开源的图片压缩算法，会自动根据图片特征自动选择压缩参数。只需要将图片拖入PP鸭，就能自动批量压缩，省时省心。
                官网：http://ppduck.com/
                特点：极致的图片压缩效果，经过长时间反复调校和对比各种算法，PP鸭在品质，体积，速度三者间，帮你定位完美的平衡点
                优点：
                跨平台图片压缩软件（win&Mac），图片压缩能够在保证质量的情况下使图片容量更小。需要付费激活，但能免费试用10次（可循环）。
                适合独立的小项目，在发布之前进行手动优化，省时简单</p>
            <div className="article-section">贰</div>
            <Code />
          </div>
        </div>
      ]} _type="article" _typed="true" />
    ];
    return (
      <div key="article-details-container" className="Center center">
        {Article_}
        <a name="comments"></a>
        <iframe id="duoshuoContainer" style={{border: 'none', width: '960px', height: 'auto'}}>

        </iframe>
      </div>
    );
  }
}
