import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { suggestUser } from "../../../api/suggest";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  PeopleGroupActiveIcon,
  PeopleGroupIcon,
} from "../../../components/Icons/Icon";
import SuggestAccount from "../../../components/SuggestAccount";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import styles from "./SIdebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const SideBar = () => {
  //suggest
  const [perPage, setPerPage] = useState<number>();
  const [isSeeMore, setIsSeeMore] = useState<boolean>(false);
  const { data, isLoading } = useQuery({
    queryKey: ["get-suggest", perPage],
    queryFn: () => suggestUser(perPage),
  });
  const handleSeeMore = useCallback(() => {
    setIsSeeMore(true);
    setPerPage(15);
  }, [perPage]);
  const handleSeeLess = useCallback(() => {
    setIsSeeMore(false);
    setPerPage(5);
  }, [perPage]);

  //scroll show hide
  const handleMouseEnter = () => {
    const wrapper = document.querySelector(`.${cx("wrapper")}`);
    if (wrapper) wrapper.classList.add(cx("show-scroll"));
  };

  const handleMouseLeave = () => {
    const wrapper = document.querySelector(`.${cx("wrapper")}`);
    if (wrapper) wrapper.classList.remove(cx("show-scroll"));
  };
  return (
    <aside
      className={cx("wrapper")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
      <SuggestAccount
        label="Suggest Accounts"
        data={data}
        isLoading={isLoading}
        onSeeMore={handleSeeMore}
        onSeeLess={handleSeeLess}
        isSeeMore={isSeeMore}
      />
    </aside>
  );
};

export default SideBar;
