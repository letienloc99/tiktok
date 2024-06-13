import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Upload from "../Pages/Upload";
import Search from "../Pages/Search";
import HeaderOnly from "../layouts/HeaderOnly";
import Live from "../Pages/Live";
const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/user/:nickname",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
  {
    path: "/live",
    component: Live,
  },
];

const privateRouter: any[] = [];

export { publicRouter, privateRouter };
