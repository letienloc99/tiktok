import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import HeaderProfile from "./components/HeaderProfile";
import ActionHeader from "./components/ActionHeader";
import ContentProfile from "./components/ContentProfile";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserVideos } from "../../api/video-user";
import Loading from "../../components/Loading";

const cx = classNames.bind(styles);
const Profile = () => {
  const { nickname } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["get-user-videos", nickname],
    queryFn: () => getUserVideos(nickname),
  });
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <div className={cx("loading-wrapper")}>
          <Loading />
        </div>
      ) : !data ? (
        navigate("/error")
      ) : (
        <div className={cx("wrapper")}>
          <div className={cx("header")}>
            <HeaderProfile data={data.data.data} />
            <ActionHeader />
          </div>
          <ContentProfile data={data.data.data.videos} />
        </div>
      )}
    </>
  );
};

export default Profile;
