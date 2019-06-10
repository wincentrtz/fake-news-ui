import {
  FETCH_POST_SUMMARY,
  FETCH_QUEUE_POSTS
} from "../constants/dashboard-constants";

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

export const fetchQueuePosts = options => dispatch => {
  const response = [
    {
      id: 1,
      title: "Lorem Ipsum Title",
      progress: 50
    },
    {
      id: 2,
      title: "Lorem Ipsum Title",
      progress: 0
    },
    {
      id: 3,
      title: "Lorem Ipsum Title",
      progress: 0
    }
  ];
  dispatch({
    type: FETCH_QUEUE_POSTS,
    payload: response
  });
};
