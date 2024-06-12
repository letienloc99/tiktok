import Home from "../Home";
import Following from "../Following";
import Profile from "../Profile";
import Upload from "../Upload";
import Search from "../Search";
import HeaderOnly from "../../layouts/HeaderOnly";
import Live from "../Live";
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
    path: "/:nickname",
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
