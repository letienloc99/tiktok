import Home from "../Home";
import Following from "../Following";
import Profile from "../Profile";
import Upload from "../Upload";
import HeaderOnly from "../../components/Layout/HeaderOnly";
import Search from "../Search";
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
    path: "/profile",
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
];

const privateRouter: any[] = [];

export { publicRouter, privateRouter };
