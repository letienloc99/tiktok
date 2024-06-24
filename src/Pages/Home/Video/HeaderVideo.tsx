import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { IUserVideos } from "../../../api/models/video-user";
const cx = classNames.bind(styles);
const HeaderVideo = ({ video }: { video: any }) => {
  return (
    <div className={cx("wrapper-header")}>
      <div className={cx("header-left")}>
        <img src={video.user.avatar} alt="Thumb" className={cx("avt-header")} />
        <div className={cx("content-header")}>
          <a href={`/@locle`} className={cx("content-username")}>
            <h3>{video.user.nickname}</h3>
            <h4>{video.user.last_name + video.user.first_name}</h4>
          </a>
          <p className={cx("description-header")}>{video.description}</p>
          <p className={cx("music-header")}>
            <FontAwesomeIcon icon={faMusic} />
            <span>{video.music}</span>
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
