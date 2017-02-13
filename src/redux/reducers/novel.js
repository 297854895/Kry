import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  rightShow: '',
  backColor: {
    label: '默认',
    color: '#efedee'
  }
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.SET_NOVEL_RIGHTSHOW:
      return state.set('rightShow', action.data);
    case ActionTypes.SET_NOVEL_BACKCOLOR:
      return state.set('backColor', action.data);
    default:
      return state;
  }
}
