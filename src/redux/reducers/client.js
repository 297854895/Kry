import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  currentArticle: '',
  currentArticleComment: []
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CLIENTARTICLEINFO:
      return state.updateIn(['currentArticle'], () => { return fromJS(action.data)});
    case ActionTypes.GET_ARTICLE_COMMENT:
      return state.updateIn(['currentArticleComment'], () => { return fromJS(action.data)});
    default:
      return state;
  }
}
