import React, { ReactNode } from "react";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

interface Props {
  children: ReactNode;
}
const cx = classNames.bind(styles);
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
