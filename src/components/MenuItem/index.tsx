import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import Button from "../Button";

interface Props {
  onClick?: () => void;
  data: {
    title: string;
    icon: any;
    to?: string;
    separate?: boolean;
  };
}
const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }: Props) => {
  return (
    <Button
      className={cx("menu-item", {
        separate: data.separate,
      })}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
