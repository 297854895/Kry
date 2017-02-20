import * as ActionTypes from '../constants/constants';
import { fromJS } from 'immutable';
const initState = {
  loading: false,
  menuShow: false,
  musicShow: false,
  musicMenuType: 'playList',
  play: false,
  searchList: ''
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.UPDATE_VALUE:
      return state.updateIn(action.data.path, () => {return fromJS(action.data.value)});
    case ActionTypes.MUSIC_SEARCH:
      return state.updateIn(['searchList'], () => {return fromJS(action.data)});
    default:
      return state;
  }
}
