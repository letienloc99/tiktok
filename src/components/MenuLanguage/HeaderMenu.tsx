import classNames from "classnames/bind";
import styles from "./MenuLanguage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
interface Props {
  onBack?: () => void;
  title: string;
}

const cx = classNames.bind(styles);

const HeaderMenu = ({ onBack, title }: Props) => {
  return (
    <header className={cx("header")} onClick={onBack}>
      <button className={cx("back-btn")}>
        <FontAwesomeIcon icon={faChevronLeft} />{" "}
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
};

export default HeaderMenu;
