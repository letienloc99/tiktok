import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../../../assets/imgaes/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCircleHalfStroke,
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faFloppyDisk,
  faGear,
  faKeyboard,
  faMessage,
  faPaperPlane,
  faPlus,
  faSearch,
  faSignOut,
  faSpinner,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import MenuItem from "../../../MenuItem";
import HeaderMenu from "../../../MenuLanguage/HeaderMenu";
interface MenuItemType {
  icon: JSX.Element;
  title: string;
  to?: string;
  children?: {
    title: string;
    data: Array<{ code: string; title: string }>;
  };
  separate?: boolean;
}
const cx = classNames.bind(styles);
const Header = () => {
  const user = true;
  const [searchResult, setSearchResult] = useState<Array<string | number>>([]);
  const dataMenuItem: MenuItemType[] = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            code: "en",
            title: "English",
          },
          {
            code: "vn",
            title: "Việt Nam",
          },
        ],
      },
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
  const userMenuItems: MenuItemType[] = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/me",
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Favorites",
      to: "/me",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    {
      icon: <FontAwesomeIcon icon={faVideo} />,
      title: "Live Photo",
    },
    {
      icon: <FontAwesomeIcon icon={faFloppyDisk} />,
      title: "Business Suits",
    },
    ...dataMenuItem,
    {
      icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
      title: "Dark mode",
    },
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Sign out",
      separate: true,
    },
  ];
  const [history, setHistory] = useState([
    { data: user ? userMenuItems : dataMenuItem },
  ]);
  const current = history[history.length - 1];
  const handleChange = (menuItem: {
    icon: JSX.Element;
    title: string;
    children?: any;
  }) => {
    console.log(menuItem);
  };
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
        <HeadlessTippy
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
        </HeadlessTippy>
        <div className={cx("action")}>
          <Button border leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          {user ? (
            <>
              <Tippy content="Messages" delay={[0, 100]}>
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Inboxs" delay={[0, 100]}>
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}
          <HeadlessTippy
            interactive={true}
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 8]}
            onHide={() => {
              setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
              <div className={cx("contents")} tabIndex={-1} {...attrs}>
                <PopperWrapper className={cx("menu-popper")}>
                  {history.length > 1 && (
                    <HeaderMenu
                      title="Language"
                      onBack={() => {
                        setHistory((prev) => prev.slice(0, prev.length - 1));
                      }}
                    />
                  )}
                  {current.data.map((item, index) => {
                    const isParent = !!item.children;
                    return (
                      <MenuItem
                        key={index}
                        data={item}
                        onClick={() => {
                          if (isParent) {
                            setHistory((prev: any) => [...prev, item.children]);
                          } else {
                            handleChange(item);
                          }
                        }}
                      />
                    );
                  })}
                </PopperWrapper>
              </div>
            )}
          >
            {user ? (
              <img
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/548ef9f04fa0ee75c6ba286fb7eda312.jpeg?lk3s=a5d48078&nonce=10899&refresh_token=3627e2b05dfaca34369ec0f08c7833c8&x-expires=1718100000&x-signature=fQpauCKFewOItjXkJ7NbJAeAQUk%3D&shp=a5d48078&shcp=81f88b70"
                alt="avatar-user"
                className={cx("user-avatar")}
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </HeadlessTippy>
        </div>
      </div>
    </header>
  );
};

export default Header;
