import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ISearch } from "../../api/models/search";
interface Props {
  data: ISearch;
}
const cx = classNames.bind(styles);
const AccountItem = ({ data }: Props) => {
  return (
    <Link to={`/${data.nickname}`} className={cx("wrapper")}>
      <img src={data.avatar} alt={data.full_name} className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
          )}
        </h4>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;
