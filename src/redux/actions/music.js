import * as ActionTypes from '../constants/constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export function searchByKey(params) {
  return dispatch => {
    // dispatch({
    //   type: ActionTypes.MUSIC_SEARCH,
    //   data: data
    // });
    console.log(process.env.NODE_ENV);
    axios.get('/search/get', {params})
      .then((response) => {
        console.log(response);
      }).catch((response) => {
        console.log('catch', response);
      });
  };
}
