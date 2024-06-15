import classNames from "classnames/bind";
import styles from "./ActionHeader.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import {
  CopyLinkIcon,
  EmbedIcon,
  FacebookIcon,
  MenuIcon,
  ReportIcon,
  SendMessageIcon,
  ShareIcon,
  TwitterIcon,
  WhatAppIcon,
} from "../../../../components/Icons/Icon";
import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import ActionItem from "./ActionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);
const shareMenu = [
  {
    icon: <EmbedIcon />,
    title: "Embed",
  },
  {
    icon: <FacebookIcon />,
    title: "Share to Facebook",
  },
  {
    icon: <WhatAppIcon />,
    title: "Share to WhatApps",
  },
  {
    icon: <TwitterIcon />,
    title: "Share to Twitter",
  },
  {
    icon: <CopyLinkIcon />,
    title: "Copy link",
  },
  {
    icon: <TwitterIcon />,
    title: "Share to Reddit",
  },
  {
    icon: <CopyLinkIcon />,
    title: "Share to Telegram",
  },
];
const moreMenu = [
  { title: "Send Message", icon: <SendMessageIcon /> },
  { title: "Report", icon: <ReportIcon /> },
  { title: "Block", icon: <FontAwesomeIcon icon={faBan} /> },
];
const ActionHeader = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className={cx("wrapper")}>
      <HeadlessTippy
        interactive={true}
        placement="bottom"
        delay={[0, 500]}
        offset={[-100, -15]}
        onHide={() => {
          setShowAll(false);
          shareMenu.slice(0, 5);
        }}
        render={(attrs) => (
          <div className={cx("share-menu")} tabIndex={1} {...attrs}>
            <PopperWrapper>
              <>
                {shareMenu
                  .slice(0, showAll ? shareMenu.length : 5)
                  .map((item, index) => (
                    <ActionItem
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  ))}
                {!showAll && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={cx("more-btn")}
                    onClick={handleShowAll}
                  />
                )}
              </>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("share-btn")}>
          <ShareIcon />
        </div>
      </HeadlessTippy>
      <HeadlessTippy
        interactive={true}
        placement="bottom"
        delay={[0, 500]}
        offset={[-70, -15]}
        onHide={() => {
          setShowAll(false);
          shareMenu.slice(0, 5);
        }}
        render={(attrs) => (
          <div className={cx("more-menu")} tabIndex={1} {...attrs}>
            <PopperWrapper>
              <>
                {moreMenu.map((item, index) => (
                  <ActionItem key={index} title={item.title} icon={item.icon} />
                ))}
              </>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("menu-btn")}>
          <MenuIcon />
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default ActionHeader;
