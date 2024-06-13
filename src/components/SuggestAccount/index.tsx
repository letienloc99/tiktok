import classNames from "classnames/bind";
import styles from "./SuggestAccount.module.scss";
import AccountItem from "./AccountItem";
import { ISuggest } from "../../api/models/suggest";
import SkeletonTab from "../SkeletonTab";

const cx = classNames.bind(styles);
interface Props {
  label: string;
  data: any;
  isLoading: boolean;
  isSeeMore: boolean;
  onSeeMore?: () => void;
  onSeeLess?: () => void;
}

const SuggestAccount = ({
  label,
  data,
  isLoading,
  isSeeMore,
  onSeeMore,
  onSeeLess,
}: Props) => {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      {isLoading ? (
        <SkeletonTab />
      ) : (
        data?.data?.data.map((item: ISuggest) => {
          return <AccountItem key={item.id} data={item} />;
        })
      )}
      <p
        className={cx("see-more-btn")}
        onClick={isSeeMore ? onSeeLess : onSeeMore}
      >
        {isSeeMore ? "See Less" : "See More"}
      </p>
    </div>
  );
};

export default SuggestAccount;
