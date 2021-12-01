import React from "react";
import {
  tabs,
  tab,
  grayIcon,
  rotate,
  show_more,
  show_less,
} from "../sizesInfo.module.scss";

const Switcher = ({ setSelectedTab, selected }) => {
  const onClickTab = (value) => setSelectedTab(value);

  const tabCollection = [
    {
      name: "S",
      number: 1,
    },
    {
      name: "M",
      number: 2,
    },
    {
      name: "L",
      number: 3,
    },
    {
      name: "XL",
      number: 4,
    },
  ];
  return (
    <nav className={tabs}>
      {tabCollection.map((item) => {
        return (
          <div
            aria-hidden="true"
            className={tab}
            onClick={() => onClickTab(item.number)}
            onKeyDown={() => onClickTab(item.number)}
          >
            <div>
              {selected !== item.number ? (
                <p className={show_more}>+</p>
              ) : (
                <p className={show_less}>-</p>
              )}
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Switcher;
