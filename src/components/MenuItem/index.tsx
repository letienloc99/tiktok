import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import Button from "../Button";

interface Props {
  data: {
    title: string;
    icon: any;
    to?: string;
  };
}
const cx = classNames.bind(styles);

const MenuItem = ({ data }: Props) => {
  return (
    <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
