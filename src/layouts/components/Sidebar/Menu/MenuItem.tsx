import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
interface Props {
  title: string;
  to: string;
  icon: ReactNode;
  activeIcon: ReactNode;
}
const cx = classNames.bind(styles);
const MenuItem = ({ title, to, icon, activeIcon }: Props) => {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu-item", { active: nav.isActive })}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("icon-active")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
};

export default MenuItem;
