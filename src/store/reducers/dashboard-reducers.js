import { FETCH_POST_SUMMARY } from "../constants/dashboard-constants";

const dashboardState = {
  charts: {
    xAxis: [],
    yAxis: []
  }
};

const dashboardReducers = (state = dashboardState, action) => {
  switch (action.type) {
    case FETCH_POST_SUMMARY:
      return {
        ...state,
        charts: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducers;
