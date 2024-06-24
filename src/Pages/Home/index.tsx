import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Loading";
import { useCallback, useState, useEffect, useRef } from "react";
import { getListVideos } from "../../api/video-user";
import { useQuery } from "@tanstack/react-query";
import Video from "./Video/VideoItem";

const cx = classNames.bind(styles);

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const playerRefs = useRef<{ play: () => void; pause: () => void }[]>([]);

  const {
    data: dataVideo,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["get", "list-video", "for-you", page],
    queryFn: () => getListVideos(page),
  });

  useEffect(() => {
    if (isSuccess && dataVideo) {
      setData((prev) => [...prev, ...dataVideo.data.data]);
    }
  }, [dataVideo, isSuccess]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1) {
            if (entry.isIntersecting) {
              playerRefs.current[index]?.play();
            } else {
              playerRefs.current[index]?.pause();
            }
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [data]);

  const handleNext = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <InfiniteScroll
        dataLength={data.length}
        next={handleNext}
        hasMore={true}
        loader={<Loading />}
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (videoRefs.current[index] = el)}
            className={cx("video-container")}
          >
            <Video
              video={item}
              ref={(el: any) => (playerRefs.current[index] = el)}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
