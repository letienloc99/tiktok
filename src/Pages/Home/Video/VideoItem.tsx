import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import classNames from "classnames/bind";
import styles from "./VideoItem.module.scss";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faVolumeDown,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import ActionVideo from "./ActionVideo";
import HeaderVideo from "./HeaderVideo";

interface Props {
  video: any;
}
const cx = classNames.bind(styles);

const Video = forwardRef(({ video }: Props, ref: any) => {
  const [playing, setPlaying] = useState(false); // Khởi tạo video không phát
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      setPlaying(true);
      playerRef.current?.seekTo(0); // Đặt lại video về đầu khi phát lại
    },
    pause: () => setPlaying(false),
  }));

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSeeking(true);
    seekTo(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (seeking) {
      seekTo(e);
    }
  };

  const handleMouseUp = () => {
    setSeeking(false);
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const progressBar = progressRef.current;
    if (progressBar) {
      const rect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newPlayed = offsetX / rect.width;
      if (playerRef.current) {
        playerRef.current.seekTo(newPlayed, "fraction");
      }
      setPlayed(newPlayed);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <HeaderVideo video={video} />
      <div className={cx("video-content")}>
        <div className={cx("video")}>
          <ReactPlayer
            ref={playerRef}
            url={video.file_url}
            playing={playing}
            muted={muted}
            controls={false}
            onProgress={handleProgress}
            loop={true}
            width="100%"
            height="100%"
          />
          <div className={cx("content")}>
            <button onClick={handlePlayPause} className={cx("control-button")}>
              {playing ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </button>

            <div
              className={cx("progress-bar")}
              ref={progressRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className={cx("progress")}
                style={{ width: `${played * 100}%` }}
              ></div>
              <div
                className={cx("dot")}
                style={{ left: `calc(${played * 100}%)` }}
              ></div>
            </div>

            <button onClick={handleMuteUnmute} className={cx("control-button")}>
              {muted ? (
                <FontAwesomeIcon icon={faVolumeMute} />
              ) : (
                <FontAwesomeIcon icon={faVolumeDown} />
              )}
            </button>
          </div>
        </div>
        <ActionVideo video={video} />
      </div>
    </div>
  );
});

export default Video;
