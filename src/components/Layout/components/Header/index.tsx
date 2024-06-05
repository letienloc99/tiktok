import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../../../assets/imgaes/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faPlus,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import MenuItem from "../../../MenuItem";
const cx = classNames.bind(styles);
const Header = () => {
  const [searchResult, setSearchResult] = useState<Array<string | number>>([]);
  const dataMenuItem = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={logo} alt="Tiktok" />
        </div>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and video" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button border leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
          <Tippy
            interactive={true}
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
              <div className={cx("contents")} tabIndex={-1} {...attrs}>
                <PopperWrapper className={cx("menu-popper")}>
                  {dataMenuItem.map((item, index) => {
                    return <MenuItem key={index} data={item} />;
                  })}
                </PopperWrapper>
              </div>
            )}
          >
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  );
};

export default Header;
