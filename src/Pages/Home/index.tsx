import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Video from "./Video/VideoItem";

const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className="wrapper">
      <Video />
    </div>
  );
};

export default Home;
