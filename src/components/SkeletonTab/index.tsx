import classNames from "classnames/bind";
import styles from "./SkeletonTab.module.scss";
const cx = classNames.bind(styles);
const SkeletonTab = () => {
  return (
    <div>
      <div className={cx("skeleton")}></div>
      <div className={cx("skeleton")}></div>
      <div className={cx("skeleton")}></div>
    </div>
  );
};

export default SkeletonTab;
