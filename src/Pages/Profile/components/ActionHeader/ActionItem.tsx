import classNames from "classnames/bind";
import styles from "./ActionHeader.module.scss";
import { ReactNode } from "react";
interface Props {
  title: string;
  icon: ReactNode;
}
const cx = classNames.bind(styles);
const ActionItem = ({ title, icon }: Props) => {
  return (
    <div className={cx("action-item")}>
      {icon}
      <p className={cx("action-title")}>{title}</p>
    </div>
  );
};

export default ActionItem;
