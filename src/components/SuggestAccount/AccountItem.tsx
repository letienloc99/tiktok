import classNames from "classnames/bind";
import styles from "./SuggestAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface Props {
  data: any;
}
const cx = classNames.bind(styles);
const AccountItem = ({ data }: Props) => {
  return (
    <Link to={`/user/@${data.nickname}`} className={cx("account-item")}>
      <img src={data.avatar} alt={data.nickname} className={cx("avatar")} />
      <div className={cx("item-info")}>
        <h4 className={cx("nickname")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
          )}
        </h4>
        <span className={cx("username")}>
          {data.first_name + data.last_name}
        </span>
      </div>
    </Link>
  );
};

export default AccountItem;
