import { FETCH_POST_TIMELINE } from "../constants/timeline-constants";

import api from "services/modules/timeline";

export const fetchPostTimeline = options => async dispatch => {
  const { data } = await api.getTimelinePosts();
  dispatch({
    type: FETCH_POST_TIMELINE,
    payload: data
  });
};
