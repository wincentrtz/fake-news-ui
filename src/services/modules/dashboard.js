import axios from "../axios.config";

import config from "configs";

const api = config.urls.dashboard;

export default {
  getQueuingPosts() {
    return axios.instance.get(api.allPostQueue);
  }
};
