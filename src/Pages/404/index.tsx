import classNames from "classnames/bind";
import styles from "./404.module.scss";
import Button from "../../components/Button";
import { ViewIcon } from "../../components/Icons/Icon";
const cx = classNames.bind(styles);
const NotFound = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <p>4</p>
        <img
          src="/src/assets/imgaes/404.png"
          alt="404"
          className={cx("image")}
        />
        <p>4</p>
      </div>
      <p className={cx("error")}>Couldn't find this page</p>
      <p className={cx("description")}>
        Check out more trending videos on TikTok
      </p>
      <Button leftIcon={<ViewIcon />} primary className={cx("home-btn")}>
        Watch Now
      </Button>
    </div>
  );
};

export default NotFound;
