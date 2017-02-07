import * as ActionTypes from '../constants/constants';
import axios from 'axios';
// import { fromJS } from 'immutable';

export function UpdateClientArticleShowInfo(data) {
  return dispatch => {
    dispatch({
      type: ActionTypes.UPDATE_CLIENTARTICLEINFO,
      data: data
    });
  };
}
