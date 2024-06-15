import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import { ViewIcon } from "../../../../components/Icons/Icon";
import { IVideo } from "../../../../api/models/video-user";

interface Props {
  data: IVideo;
}
const cx = classNames.bind(styles);
const VideoItem = ({ data }: Props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  return (
    <div
      className={cx("wrapper")}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
    >
      <div className={cx("video")}>
        <ReactPlayer
          url={data.file_url}
          controls={false}
          playing={playing}
          width="100%"
          height="100%"
          muted={false}
          volume={0}
          loop={true}
          light={
            !playing && (
              <img
                src={data.thumb_url}
                alt="Thumbnail"
                className={cx("thumb-video")}
              />
            )
          }
          playIcon={<div />}
        />
      </div>
      <div className={cx("view")}>
        <ViewIcon />
        <p>{data.views_count}</p>
      </div>
      <div className={cx("description")}>{data.description}</div>
    </div>
  );
};

export default VideoItem;
