import React from "react";
import { tabs, tab, grayIcon } from "../swapper.module.scss";
import locationIcon from "../../../../../../../../images/icons/location_icon.png";
import healthIcon from "../../../../../../../../images/icons/health_icon.png";
import activityIcon from "../../../../../../../../images/icons/activity_icon.png";
import MediaQuery from "react-responsive";

const Switcher = ({ setSelectedTab, selected }) => {
  const onClickTab = (value) => setSelectedTab(value);

  const tabCollection = [
    {
      name: "Actividad",
      number: 1,
      url: activityIcon,
    },
    {
      name: "Salud",
      number: 2,
      url: healthIcon,
    },
    {
      name: "Localización",
      number: 3,
      url: locationIcon,
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
            <MediaQuery maxWidth={900}>
              <img
                className={selected !== item.number && grayIcon}
                src={item.url}
                alt={item.name}
              />
              <p>{item.name}</p>
            </MediaQuery>        
            <MediaQuery minWidth={900}>
              <img
                src={item.url}
                alt={item.name}
              />
              <p>{item.name}</p>
            </MediaQuery>
          </div>
        );
      })}
    </nav>
  );
};

export default Switcher;
