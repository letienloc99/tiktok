import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@tanstack/react-query";

import AccountItem from "../../../components/AccountItem";
import { ISearch } from "../../../api/models/search";
import { useDebounce } from "../../../hooks/useDebounce";
import { search } from "../../../api/search";

const SearchHeader = () => {
  const cx = classNames.bind(styles);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<Array<ISearch>>([]);
  const [visible, setVisible] = useState<boolean>(true);
  const debounce = useDebounce(searchValue, 800);
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate, isPending } = useMutation({
    mutationKey: ["search"],
    mutationFn: search,
    onSuccess(res) {
      setSearchResult(res?.data.data);
    },
    onError() {},
  });
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    mutate(debounce);
  }, [debounce]);
  const handleHideResult = () => {
    setVisible(false);
  };
  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResult([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  return (
    <HeadlessTippy
      interactive={true}
      visible={visible && searchResult.length > 0}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex={1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((item: ISearch) => {
              return <AccountItem key={item.id} data={item} />;
            })}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          placeholder="Search accounts and video"
          spellCheck={false}
          onChange={handleChange}
          value={searchValue}
          ref={inputRef}
          onFocus={() => setVisible(true)}
        />
        {!!searchValue && !isPending && (
          <button className={cx("clear")} onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {isPending && (
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
        )}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default SearchHeader;
