import { FETCH_POST_SUMMARY } from "../constants/dashboard-constants";

export const fetchPostSummary = () => dispatch => {
  const response = {
    xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    yAxis: [30, 40, 45, 50, 49, 60, 70, 91]
  };
  dispatch({
    type: FETCH_POST_SUMMARY,
    payload: response
  });
};
