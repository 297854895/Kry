import React from 'react';
import {IndexRoute, Route} from 'react-router';
// import {Music} from 'components';
import Public from './containers/Public/Public';
import Index from './containers/Index/Index';
import NotFound from './containers/NotFound/NotFound';
import Novel from './containers/Novel/Novel';
import Article from './containers/Article/Article';
import Leave from './containers/Leave/Leave';
import List from './containers/List/List';
export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={Public}>
      { /* Home (main) route */ }
      <IndexRoute component={Index}/>
      <Route path="/article" component={Article} />
      <Route path="/leave" component={Leave} />
      <Route path="/novel" component={Novel} />
      <Route path="/list" component={List} />
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
