import {
  FETCH_POST_SUMMARY,
  FETCH_QUEUE_POSTS,
  FETCH_RESULT_POSTS
} from "../constants/dashboard-constants";

import api from "services/modules/dashboard";

export const fetchPostSummary = options => dispatch => {
  const response = {
    xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    yAxis: [30, 40, 45, 50, 49, 60, 70, 91]
  };
  dispatch({
    type: FETCH_POST_SUMMARY,
    payload: response
  });
};

export const fetchQueuePosts = options => async dispatch => {
  const { data } = await api.getQueuingPosts();
  dispatch({
    type: FETCH_QUEUE_POSTS,
    payload: data
  });
};

export const fetchResultPosts = options => dispatch => {
  const response = [
    {
      id: 1,
      title: "Lorem Ipsum Title",
      hoax: false
    },
    {
      id: 2,
      title: "Lorem Ipsum Title",
      hoax: false
    },
    {
      id: 3,
      title: "Lorem Ipsum Title",
      hoax: true
    },
    {
      id: 4,
      title: "Lorem Ipsum Title",
      hoax: true
    },
    {
      id: 5,
      title: "Lorem Ipsum Title",
      hoax: false
    }
  ];
  dispatch({
    type: FETCH_RESULT_POSTS,
    payload: response
  });
};
