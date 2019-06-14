import { FETCH_POST_TIMELINE } from "../constants/timeline-constants";

const timelineState = {
  posts: []
};

const timelineReducers = (state = timelineState, action) => {
  switch (action.type) {
    case FETCH_POST_TIMELINE:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default timelineReducers;
