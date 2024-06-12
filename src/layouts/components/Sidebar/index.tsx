import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  PeopleGroupActiveIcon,
  PeopleGroupIcon,
} from "../../../components/Icons/Icon";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import styles from "./SIdebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const SideBar = () => {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to="/"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to="/following"
          icon={<PeopleGroupIcon />}
          activeIcon={<PeopleGroupActiveIcon />}
        />
        <MenuItem
          title="Live"
          to="/live"
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
    </aside>
  );
};

export default SideBar;
