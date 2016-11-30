import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import replaceAll from '../../helpers/replaceAll';
export default class Code extends Component {
  componentDidMount = () => {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code')[0];
    const codeContainer = document.createElement('div');
    let testCode =
`import React, {Component} from 'react';
import TitleIcon from '../TitleIcon/TitleIcon';
import Block from '../Block/Block';
export default class Article extends Component {
  render() {
    return (
      <div key="article-list-container" className="Center center">
        <div key="Right" className="Right" style={{width: '800px'}}>
          <div className="Center-margin" style={{margin: '0 50px 0 0'}}>
            <Block key={"indexarticle-key0"} _key={"indexarticle-0"} _child={[]} _type="article" _list="list" />
            <Block key={"indexarticle-key1"} _key={"indexarticle-1"} _child={[]} _type="article" _list="list" />
            <Block key={"indexarticle-key2"} _key={"indexarticle-2"} _child={[]} _type="article" _list="list" />
            <Block key={"indexarticle-key3"} _key={"indexarticle-3"} _child={[]} _type="article" _list="list" />
          </div>
        </div>
        <div key="Left" className="Left" style={{width: '400px'}}>
          <div className="Center-margin">

          </div>
        </div>
      </div>
    );
  }
}
`;
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
