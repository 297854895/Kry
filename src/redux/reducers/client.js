import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  currentArticle: '',
  currentArticleComment: [],
  homePageArticleList: {},
  articleDetails: {},
  articleListByType: {},
  articleRecommend: [],
  articleListTop9: {}
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CLIENTVALUE:
      return state;
    case ActionTypes.UPDATE_CLIENTARTICLEINFO:
      return state.updateIn(['currentArticle'], () => { return fromJS(action.data)});
    case ActionTypes.GET_ARTICLE_COMMENT:
      return state.updateIn(['currentArticleComment'], () => { return fromJS(action.data)});
    case ActionTypes.GET_HOMEPAGE_ARTICLE:
      return state.updateIn(['homePageArticleList'], () => {return fromJS(action.data)});
    case ActionTypes.GET_ARTICLE_DETAILS:
      return state.updateIn(['articleDetails'], () => {return fromJS(action.data)});
    case ActionTypes.GET_ARTICLE_BYTYPE:
      return state.updateIn(['articleListByType'], () => {return fromJS(action.data)});
    case ActionTypes.GET_ARTICLE_RECOMMEND:
      return state.updateIn(['articleRecommend'], () => {return fromJS(action.data)});
    case ActionTypes.GET_ARTICLE_BYTYPE_LIST:
      return state.updateIn(['articleListTop9'], () => {return fromJS(action.data)});
    default:
      return state;
  }
}
