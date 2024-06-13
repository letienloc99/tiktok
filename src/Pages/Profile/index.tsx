import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import HeaderProfile from "./components/HeaderProfile";
import ActionHeader from "./components/ActionHeader";

const cx = classNames.bind(styles);
const Profile = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <HeaderProfile />
        <ActionHeader />
      </div>
    </div>
  );
};

export default Profile;
