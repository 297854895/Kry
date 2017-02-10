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
//getArticle comment
export function getArticleComment(type, articleid, cid) {
  const data = [
    {
      type: 'main',
      dateTime: '2017-03-04',
      thumbNum: 1930,
      comNum: 1333,
      cid: 1,
      userName: '空如也',
      context: '十分不错！',
      comment: [
        {
          userName: '空如也',
          context: '第三方和湿地开放很都是开发商的联发科。',
          type: 'comment',
          cid: 1,
          ccid: 'c1'
        },
        {
          userName: '空如也',
          context: '第三方和湿地开放很都是开发商的联发科。',
          type: 'comment',
          cid: 1,
          ccid: 'c2'
        },
        {
          userName: '空如也',
          context: '第三方和湿地开放很都是开发商的联发科。',
          type: 'comment',
          cid: 1,
          ccid: 'c3'
        },
        {
          userName: '空如也',
          context: '第三方和湿地开放很都是开发商的联发科。',
          type: 'comment',
          cid: 1,
          ccid: 'c4'
        },
        {
          userName: '空如也',
          context: '第三方和湿地开放很都是开发商的联发科。',
          type: 'comment',
          cid: 1,
          ccid: 'c5'
        }
      ]
    },
    {
      type: 'main',
      dateTime: '2017-03-04',
      thumbNum: 30,
      comNum: 100,
      cid: 2,
      userName: '余小思',
      context: '傻逼傻逼傻逼！',
      comment: []
    },
    {
      type: 'main',
      dateTime: '2017-03-04',
      thumbNum: 30,
      comNum: 100,
      cid: 3,
      userName: '余小思',
      context: '傻逼傻逼傻逼！',
      comment: []
    },
    {
      type: 'main',
      dateTime: '2017-03-04',
      thumbNum: 30,
      comNum: 100,
      cid: 4,
      userName: '余小思',
      context: '傻逼傻逼傻逼！',
      comment: []
    }
  ];
  return dispatch => {
    dispatch({
        type: ActionTypes.GET_ARTICLE_COMMENT,
        data: data
    });
  };
}
