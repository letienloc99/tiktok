import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474070rNU/anh-avatar-goku-ban-nang-vo-cuc_011149230.jpg"
        alt=""
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Le Tien Loc</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </h4>
        <span className={cx("username")}>Letienloc</span>
      </div>
    </div>
  );
};

export default AccountItem;
