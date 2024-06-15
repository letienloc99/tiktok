import classNames from "classnames/bind";
import styles from "./ContentProfile.module.scss";
import { KeyIcon } from "../../../../components/Icons/Icon";
import VideoItem from "../VideoItem";
import { useState } from "react";
import { IVideo } from "../../../../api/models/video-user";
import { useParams } from "react-router-dom";

interface Props {
  data: IVideo[] | null;
}
const cx = classNames.bind(styles);
const ContentProfile = ({ data }: Props) => {
  const { nickname } = useParams();
  const [activeTab, setActiveTab] = useState<string>("videos");
  const [hoverTab, setHoverTab] = useState<string>("");
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div
          className={cx("content", {
            active: activeTab === "videos",
            hover: hoverTab === "videos",
          })}
          onMouseEnter={() => setHoverTab("videos")}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </div>
        <div
          className={cx("content", {
            active: activeTab === "liked",
            hover: hoverTab === "liked",
          })}
          onClick={() => setActiveTab("liked")}
          onMouseEnter={() => setHoverTab("liked")}
        >
          <span className={cx("icon")}>
            <KeyIcon />
          </span>
          <p>Liked</p>
        </div>
      </div>
      {activeTab === "videos" && (
        <div className={cx("video-list")}>
          {!data ? (
            <div></div>
          ) : (
            data.map((item: IVideo) => <VideoItem key={item.id} data={item} />)
          )}
        </div>
      )}
      {activeTab === "liked" && (
        <div className={cx("like-list")}>
          <KeyIcon
            width="58px"
            height="70px"
            className={cx("like-list-icon")}
          />
          <p className={cx("like-list-content")}>
            This user's liked videos are private
          </p>
          <p className={cx("like-list-hidden")}>
            Videos liked by {nickname} are currently hidden
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentProfile;
