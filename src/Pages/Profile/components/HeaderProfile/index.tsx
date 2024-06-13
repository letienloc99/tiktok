import classNames from "classnames/bind";
import styles from "./HeaderProfile.module.scss";
import Button from "../../../../components/Button";
const cx = classNames.bind(styles);
const HeaderProfile = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/548ef9f04fa0ee75c6ba286fb7eda312.jpeg?lk3s=a5d48078&nonce=53935&refresh_token=546c90c56317078654ba79430f640d72&x-expires=1718463600&x-signature=he7TwuM2tRm3a8Iw7sit3yQRsxQ%3D&shp=a5d48078&shcp=81f88b70"
          alt="Loc"
        />
        <div className={cx("info-content")}>
          <h4 className={cx("nickname")}>letienloc99</h4>
          <p className={cx("username")}>Lê Tiến Lộc</p>
          <Button primary className={cx("follow-btn")}>
            Follow back
          </Button>
        </div>
      </div>
      <div className={cx("follow")}>
        <div className={cx("following")}>
          <p>1432</p>
          <span>Following</span>
        </div>
        <div className={cx("follower")}>
          <p>1432</p>
          <span>Followers</span>
        </div>
        <div className={cx("like")}>
          <p>1432</p>
          <span>Likes</span>
        </div>
      </div>
      <p className={cx("description")}>Mình là Lộc đấy!</p>
    </div>
  );
};

export default HeaderProfile;
