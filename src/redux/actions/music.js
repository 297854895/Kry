import * as ActionTypes from '../constants/constants';
import axios from 'axios';
import { fromJS } from 'immutable';
import jsonpFallback from 'jsonp-fallback';

export function searchByKey(params) {
  return dispatch => {
    let timerNum = 0;
    let timer = setInterval(() => {
      if (timerNum >= 50) {
        clearInterval(timer);
        dispatch({
          type: ActionTypes.UPDATE_VALUE,
          data: {
            path: ['loading'],
            value: 'timeout'
          }
        });
        timer = false;
        return;
      }
      timerNum += 1;
    }, 100);

    jsonpFallback("http://s.music.163.com/search/get", params)
    .then(data => {
      if (data.code === 200) {
        if (timer) {
          clearInterval(timer);
        } else {return;}
        dispatch({
          type: ActionTypes.UPDATE_VALUE,
          data: {
            path: ['loading'],
            value: false
          }
        });
        dispatch({
          type: ActionTypes.MUSIC_SEARCH,
          data: data.result ? data.result : {songCount: 0, songs: []}
        });
      }
    }).catch(error => {
      dispatch({
        type: ActionTypes.UPDATE_VALUE,
        data: {
          path: ['loading'],
          value: false
        }
      });
    });

  };
}
