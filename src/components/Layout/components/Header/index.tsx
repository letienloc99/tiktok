import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../../../assets/imgaes/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={logo} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search accounts and video" />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
};

export default Header;
