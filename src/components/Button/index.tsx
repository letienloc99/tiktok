import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
interface Props {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  primary: boolean;
  outline: boolean;
  passProps?: any;
  small: boolean;
  large: boolean;
  border: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
  className?: any;
}
const Button = ({
  to,
  href,
  onClick,
  children,
  primary,
  passProps,
  outline,
  border,
  small,
  large,
  leftIcon,
  rightIcon,
  className,
}: Props) => {
  let Comp: any = "button";
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    border,
  });
  const props: any = {
    onClick,
    ...passProps,
  };

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <p className={cx("title")}>{children}</p>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
