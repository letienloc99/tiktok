import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
interface Props {
  children: ReactNode;
}
const cx = classNames.bind(styles);
const Menu = ({ children }: Props) => {
  return <nav className={cx("")}>{children}</nav>;
};

export default Menu;
