import styles from "./SIdebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const SideBar = () => {
  return <div className={cx("wrapper")}>SideBar</div>;
};

export default SideBar;
