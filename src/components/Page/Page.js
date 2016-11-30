import React, {Component} from 'react';

export default class Page extends Component {
  componentDidMount = () => {
    this.setState(this.props);
  }
  turnPage = (evt) => {
    if (evt.target.getAttribute('data-current') === 'false') {
      const page = parseInt(evt.target.innerHTML, 10);
      const newPage = {...this.props};
      newPage.data.current = page;
      this.setState(newPage);
    }
  }
  nextPage = (evt) => {
    if (evt.target) {
      let type = evt.target.getAttribute('data-type') ;
      const newPage = {...this.props};
      if (!type) {
        type = evt.target.parentNode.getAttribute('data-type');
      }
      if (type === 'next') {
        newPage.data.current += 1;
      } else if (type === 'back') {
        newPage.data.current -= 1;
      }
      this.setState(newPage);
    }
  }
  initialPage = () => {
    let pageData = this.props;
    if (this.state) {
      pageData = this.state;
    }
    const pageTotal = Math.ceil(pageData.data.total / pageData.data.size);
    const page = [];
    const pageCurrent = pageData.data.current;
    if (pageCurrent === 1) {
      page.push(<a data-ype="turn" key={"page-back"} data-type="back" className="page-turn page-turn-disable"><i className="fa fa-angle-left"></i></a>);
    } else {
      page.push(<a data-ype="turn" key={"page-back"} data-type="back" className="page-turn" onClick={this.nextPage}><i className="fa fa-angle-left"></i></a>);
    }
    let className = 'page-default';
    let domCurrent = 'false';
    if (pageTotal <= 7) {
      for (let num = 1; num < 8; num ++ ) {
        if (num === pageCurrent) {
          className += ' page-active';
          domCurrent = 'true';
        }
        page.push(<a className={className} key={`page-${num}`} data-ype="page" data-current={domCurrent} onClick={this.turnPage}>{num}</a>);
        className = 'page-default';
        domCurrent = 'false';
      }
    } else {
      if (pageCurrent > 3 && pageCurrent < pageTotal - 3 ) {
        page.push(<a className="page-default" key={`page-1`} data-ype="page" data-current="false" onClick={this.turnPage}>1</a>);
        page.push(<a className="page-hide" key={`page-next-more`} data-ype="page">...</a>);
        for (let num = pageCurrent - 1; num < pageCurrent + 2; num ++ ) {
          if (num === pageCurrent) {
            className += ' page-active';
            domCurrent = 'true';
          }
          page.push(<a className={className} key={`page-${num}`} data-ype="page" data-current={domCurrent} onClick={this.turnPage}>{num}</a>);
          className = 'page-default';
          domCurrent = 'false';
        }
        page.push(<a className="page-hide" key={`page-next-more-2`} data-ype="page">...</a>);
        page.push(<a className="page-default" key={`page-${pageTotal}`} data-ype="page" data-current="false" onClick={this.turnPage}>{pageTotal}</a>);
      } else if (pageCurrent <= 3 ) {
        for (let num = 1; num < 6; num ++ ) {
          if (num === pageCurrent) {
            className += ' page-active';
            domCurrent = 'true';
          }
          page.push(<a className={className} key={`page-${num}`} data-ype="page" data-current={domCurrent} onClick={this.turnPage}>{num}</a>);
          className = 'page-default';
          domCurrent = 'false';
        }
        page.push(<a className="page-hide" key={`page-next-more-2`} data-ype="page">...</a>);
        page.push(<a className="page-default" key={`page-${pageTotal}`} data-ype="page" data-current="false" onClick={this.turnPage}>{pageTotal}</a>);
      } else if (pageCurrent >= pageTotal - 3) {
        page.push(<a className="page-default" key={`page-1`} data-ype="page" data-current="false" onClick={this.turnPage}>1</a>);
        page.push(<a className="page-hide" key={`page-next-more`} data-ype="page">...</a>);
        for (let num = pageTotal - 4; num < pageTotal + 1; num ++ ) {
          if (num === pageCurrent) {
            className += ' page-active';
            domCurrent = 'true';
          }
          page.push(<a className={className} key={`page-${num}`} data-ype="page" data-current={domCurrent} onClick={this.turnPage}>{num}</a>);
          className = 'page-default';
          domCurrent = 'false';
        }
      }
    }
    if (pageCurrent === pageTotal) {
      page.push(<a data-ype="turn" key={'page-next'} data-type="next" className="page-turn page-turn-disable"><i className="fa fa-angle-right"></i></a>);
    } else {
      page.push(<a data-ype="turn" key={'page-next'} data-type="next" className="page-turn" onClick={this.nextPage}><i className="fa fa-angle-right"></i></a>);
    }
    return page;
  }
  render() {
    return (
      <div className="page">
        <div className="page-container">
          {this.initialPage()}
        </div>
      </div>
    );
  }
}
