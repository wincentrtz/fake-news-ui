import axios from "../axios.config";

import config from "configs";

const api = config.urls.timeline;

export default {
  getTimelinePosts() {
    return axios.instance.get(api.timelinePosts);
  }
};
