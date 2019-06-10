import {
  FETCH_POST_SUMMARY,
  FETCH_QUEUE_POSTS,
  FETCH_RESULT_POSTS
} from "../constants/dashboard-constants";

const dashboardState = {
  charts: {
    xAxis: [],
    yAxis: []
  },
  queuePosts: [],
  resultPosts: []
};

const dashboardReducers = (state = dashboardState, action) => {
  switch (action.type) {
    case FETCH_POST_SUMMARY:
      return {
        ...state,
        charts: action.payload
      };
    case FETCH_QUEUE_POSTS:
      return {
        ...state,
        queuePosts: action.payload
      };
    case FETCH_RESULT_POSTS:
      return {
        ...state,
        resultPosts: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducers;
