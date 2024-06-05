import React, { ReactNode } from "react";
import styles from "./Poper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface Props {
  children: ReactNode;
  className?: ReactNode;
}
const Wrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={cx("wrapper", className)}>{children}</div>;
};

export default Wrapper;
