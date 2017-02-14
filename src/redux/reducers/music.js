import * as ActionTypes from '../constants/constants';
import { fromJS } from 'immutable';
const initState = {
  menuShow: false,
  musicShow: false,
  play: false
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.UPDATE_VALUE:
      return state.updateIn(action.data.path, () => {return fromJS(action.data.value)});
    default:
      return state;
  }
}
