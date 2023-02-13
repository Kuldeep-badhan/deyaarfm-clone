import React from "react";
import { Link, useLocation } from "react-router-dom";
import media from "../../assets/media.jpg";
import "./MediaCenter.scss";
const MediaCenter = () => {
  const { pathname } = useLocation();
  console.log(pathname, " media");
  return (
    <div className="media__center">
      <div className="media__center__header">
        <img src={media} alt="media__center image" />
        <div className="media__center__header--card">
          <div className="pos">
            <span>Home</span>
            <span>Press Release</span>
          </div>
          <h1>PRESS RELEASE</h1>
        </div>
      </div>
      <div className="media__center__body">
        <div className="media__center__body--left">
          <ul>
            <li>
              <Link
                to={"/press-release"}
                className={pathname == "/press-release" ? "active_media" : ""}
              >
                PRESS RELEASE
              </Link>
            </li>
            <li>
              <Link
                to={"/press-kit-dfm"}
                className={pathname == "/press-kit-dfm" ? "active_media" : ""}
              >
                DOWNLOAD
              </Link>
            </li>
          </ul>
        </div>
        <div className="media__center__body--right">
          {pathname == "/press-release" && <>press-release</>}
          {pathname == "/press-kit-dfm" && <>press-kit-dfm</>}
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;
