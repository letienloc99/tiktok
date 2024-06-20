import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const HeaderVideo = () => {
  return (
    <div className={cx("wrapper-header")}>
      <div className={cx("header-left")}>
        <img
          src="https://files.fullstack.edu.vn/f8-tiktok/users/6763/6664479d5e44a.jpg"
          alt="Thumb"
          className={cx("avt-header")}
        />
        <div className={cx("content-header")}>
          <a href={`/@locle`} className={cx("content-username")}>
            <h3>locle</h3>
            <h4>Le Tien Loc</h4>
          </a>
          <p className={cx("description-header")}>Lúc cũm ít chechou lắm 🤣 </p>
          <p className={cx("music-header")}>
            <FontAwesomeIcon icon={faMusic} />
            <span>Nhạc nền Triệu Tư Long</span>
          </p>
        </div>
      </div>
      <Button outline className={cx("follow-btn")}>
        Follow
      </Button>
    </div>
  );
};

export default HeaderVideo;
