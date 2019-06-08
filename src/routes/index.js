import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Home from "pages/Home";

export default [
  {
    url: "/admin/a",
    component: Page1
  },
  {
    url: "/admin/b",
    component: Page2
  },
  {
    url: "/admin",
    component: Home
  }
];
