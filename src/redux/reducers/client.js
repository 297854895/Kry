import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  currentArticle: '',
  newcomment: [],
  currentArticleComment: {},
  homePageArticleList: {},
  articleDetails: {},
  articleListByType: {},
  articleRecommend: [],
  articleListTop9: {}
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CLIENTVALUE:
      return state.updateIn(action.path, () => {return fromJS(action.data)});
    case ActionTypes.PUSH_COMMENT:
      let newState;
      if (!state.getIn(['currentArticleComment', 'data'])) {
        newState = state.updateIn(['currentArticleComment'], () => {return fromJS({index: 1, size: 10, total: 1, data: [action.data]})})
      } else {
        newState = state.updateIn(['currentArticleComment', 'data'], (data) => {
                          const thisData = data.toJS();
                          if (thisData.length === 10) {
                            thisData.pop();
                          }
                          thisData.unshift(action.data);
                          return fromJS(thisData);
                        })
                    .updateIn(['currentArticleComment', 'total'], (total) => {return total + 1});
      }
      return newState;
    case ActionTypes.RESET_CLIENT_STATE:
      return state.updateIn([action.data], () => {return fromJS({})});
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
    case ActionTypes.RESET_ARTICLE:
      return state.updateIn(['articleDetails'], () => {return fromJS({})})
                  .updateIn(['currentArticleComment'], () => {return fromJS({})});
    default:
      return state;
  }
}
