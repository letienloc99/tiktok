import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import {
  FavoriteIcon,
  MenuIcon,
  ShareIcon,
} from "../../../components/Icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const ActionVideo = () => {
  return (
    <div className={cx("menu-action")}>
      <button className={cx("action-icon")}>
        <div className={cx("icon-btn")}>
          <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
        </div>
        <p>1.6M</p>
      </button>
      <button className={cx("action-icon")}>
        <div className={cx("icon-btn")}>
          <FontAwesomeIcon icon={faCommentDots} className={cx("icon")} />
        </div>
        <p>1.6M</p>
      </button>
      <button className={cx("action-icon")}>
        <div className={cx("icon-btn")}>
          <FavoriteIcon />
        </div>
        <p>1.6M</p>
      </button>
      <button className={cx("action-icon")}>
        <div className={cx("icon-btn")}>
          <ShareIcon />
        </div>
        <p>1.6M</p>
      </button>
      <button className={cx("action-icon")}>
        <div className={cx("icon-btn")}>
          <MenuIcon />
        </div>
        <p>1.6M</p>
      </button>
    </div>
  );
};

export default ActionVideo;
