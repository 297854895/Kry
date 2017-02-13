import * as ActionTypes from '../constants/constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export function setRightShow(val) {
  return dispatch => {
    dispatch({
      type: ActionTypes.SET_NOVEL_RIGHTSHOW,
      data: val
    });
  };
}
export function setBackColor(data) {
  return dispatch => {
    dispatch({
        type: ActionTypes.SET_NOVEL_BACKCOLOR,
        data: data
    });
  };
}
