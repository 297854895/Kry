import * as ActionTypes from '../constants/constants';
// import { fromJS } from 'immutable';
export function UpdateValue(constants, data) {
  return dispatch => {
    dispatch({
      type: ActionTypes[constants],
      data: data
    });
  };
}
