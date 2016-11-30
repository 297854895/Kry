import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  rightShow: '',
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.SET_NOVEL_RIGHTSHOW:
      return state.set('rightShow', action.data);
    default:
      return state;
  }
}
