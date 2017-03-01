import * as ActionTypes from '../constants/constants';
import axios from 'axios';
// import { fromJS } from 'immutable';
//setArticle type and id
export function UpdateClientArticleShowInfo(data) {
  return dispatch => {
    dispatch({
      type: ActionTypes.UPDATE_CLIENTARTICLEINFO,
      data: data
    });
  };
}
//update Value
export function UpdateClientValue(data) {
  return dispatch => {
    dispatch({
      type: ActionTypes.UPDATE_CLIENTVALUE,
      data: data
    });
  };
}
export function resetArticleDetails() {
  return dispatch => {
    dispatch({
      type: ActionTypes.RESET_ARTICLE
    });
  };
}
//get article details
export function getArticleDetails(params) {
  return dispatch => {
    axios.get('/front/article', {params})
      .then(resp => {
        if (resp.status === 200) {
          dispatch({
            type: ActionTypes.GET_ARTICLE_DETAILS,
            data: resp.data
          })
        } else {
          console.log('getArticleDetails error');
        }
      })
      .catch(err => {
        console.log(err);
      })
  };
}
//get home page article
export function getHomePageArticle(params) {
  return dispatch => {
    axios.get('/front/article', {params : params})
      .then(resp => {
        if (resp.status === 200) {
          dispatch({
            type: ActionTypes.GET_HOMEPAGE_ARTICLE,
            data: resp.data
          })
        } else {
          console.log('getHomePageArticle error');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}
export function getArticleListTop9() {
  return dispatch => {
    axios.get('/front/article', {params : {type: 'type'}})
      .then(resp => {
        if (resp.status === 200) {
          dispatch({
            type: ActionTypes.GET_ARTICLE_BYTYPE_LIST,
            data: resp.data,
          })
        } else {
          console.log('getArticleListTop9 error');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}
//get articlelist by type {web or word}
export function getArticleListByType(path, params) {
  return dispatch => {
    axios.get('/front/article', {params : params})
      .then(resp => {
        if (resp.status === 200) {
          dispatch({
            type: ActionTypes[path],
            data: resp.data
          })
        } else {
          console.log('getArticleListByType error');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

//getArticle comment
export function getArticleComment(_id, index, size, filterKey) {
  return dispatch => {
    axios.get('/front/comment', {params: {_id: _id, index: index, size: size, filterKey: filterKey}})
    .then(resp => {
      if (resp.status === 200) {
        dispatch({
          type: ActionTypes.GET_ARTICLE_COMMENT,
          data: resp.data.data.length > 0 ? resp.data : 'nocomment'
        });
      }
    })
    .catch(err => {
      console.error(err);
    })
  }
}
