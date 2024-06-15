import classNames from "classnames/bind";
import styles from "./HeaderProfile.module.scss";
import Button from "../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faLink } from "@fortawesome/free-solid-svg-icons";
import { IUserVideos } from "../../../../api/models/video-user";
interface Props {
  data: IUserVideos;
}
const cx = classNames.bind(styles);
const HeaderProfile = ({ data }: Props) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <img className={cx("avatar")} src={data.avatar} alt={data.nickname} />
        <div className={cx("info-content")}>
          <h4 className={cx("nickname")}>
            <span>{data.nickname}</span>
            {data.tick && (
              <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
            )}
          </h4>
          <p className={cx("username")}> {data.first_name + data.last_name} </p>
          <Button primary className={cx("follow-btn")}>
            Follow back
          </Button>
        </div>
      </div>
      <div className={cx("follow")}>
        <div className={cx("following")}>
          <p>{data.followings_count}</p>
          <span>Following</span>
        </div>
        <div className={cx("follower")}>
          <p>{data.followers_count}</p>
          <span>Followers</span>
        </div>
        <div className={cx("like")}>
          <p>{data.likes_count}</p>
          <span>Likes</span>
        </div>
      </div>
      <p className={cx("description")}>{data.bio ? data.bio : "No bio yet."}</p>
      {data.website_url && (
        <a href={data.website_url} className={cx("link")}>
          <FontAwesomeIcon icon={faLink} className={cx("icon-link")} />
          {data.website_url}
        </a>
      )}
      {data.facebook_url && (
        <a href={data.facebook_url} className={cx("link")}>
          <FontAwesomeIcon icon={faLink} className={cx("icon-link")} />
          {data.facebook_url}
        </a>
      )}
      {data.youtube_url && (
        <a href={data.youtube_url} className={cx("link")}>
          <FontAwesomeIcon icon={faLink} className={cx("icon-link")} />
          {data.youtube_url}
        </a>
      )}
      {data.twitter_url && (
        <a href={data.twitter_url} className={cx("link")}>
          <FontAwesomeIcon icon={faLink} className={cx("icon-link")} />
          {data.twitter_url}
        </a>
      )}
      {data.instagram_url && (
        <a href={data.instagram_url} className={cx("link")}>
          <FontAwesomeIcon icon={faLink} className={cx("icon-link")} />
          {data.instagram_url}
        </a>
      )}
    </div>
  );
};

export default HeaderProfile;
