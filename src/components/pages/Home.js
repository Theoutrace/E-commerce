import React, { Fragment } from "react";
import cls from "./Home.module.css";

const About = () => {
  const toursData = [
    {
      id: Math.random().toString(),
      date: "JUL 16",
      title: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: Math.random().toString(),
      date: "JUL 19",
      title: "TORONTO,ON",
      venue: "BUDWEISER STAGE",
    },
    {
      id: Math.random().toString(),
      date: "JUL 22",
      title: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      id: Math.random().toString(),
      date: "JUL 29",
      title: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      id: Math.random().toString(),
      date: "JUL 2",
      title: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      id: Math.random().toString(),
      date: "JUL 7",
      title: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];
  return (
    <Fragment>
      <div className={cls["button-and-play"]}>
        <button className={cls["latest-album-btn"]}>
          Get our Latest Album
        </button>
        <button className={cls["play-btn"]}>▶</button>
      </div>
      <div>
        <div className={cls["tour-pannel-container"]}>
          <div className={cls["tour-text"]}>Tours</div>
          {toursData.map((item) => {
            return (
              <>
              <div className={cls["item-container"]}>
                <div className={cls["internal-div"]}>{item.date}</div>
                <div className={cls["internal-div"]}>{item.title}</div>
                <div className={cls["internal-div-venue"]}>{item.venue}</div>
                <div className={cls["internal-div-btn"]}>
                  <button className={cls["buy-ticket-btn"]}>BUY TICKETS</button>
                </div>
              </div>
              <hr/>
              </>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default About;
