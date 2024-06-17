import { useState, useRef, useEffect } from "react";
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

const cx = classNames.bind(styles);

const Video = () => {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPlaying(true);
  }, []);

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
      <div className={cx("video")}>
        <ReactPlayer
          ref={playerRef}
          url={
            "https://files.fullstack.edu.vn/f8-tiktok/videos/520-63516c43aeede.mp4"
          }
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
    </div>
  );
};

export default Video;
