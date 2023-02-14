import React from "react";
import { Link, useLocation } from "react-router-dom";
import media from "../../assets/media.jpg";
import download from "../../assets/download.png";
import "./MediaCenter.scss";
import PressRelease from "../../components/MediaCenter/PressRelease/PressRelease";
import Download from "../../components/MediaCenter/Download/Download";
const MediaCenter = () => {
  const { pathname } = useLocation();
  console.log(pathname, " media");
  return (
    <div className="media__center">
      <div className="media__center__header">
        {pathname == "/press-release" && (
          <img src={media} alt="media__center image" />
        )}
        {pathname == "/press-kit-dfm" && (
          <img src={download} alt="media__center image" />
        )}

        <div className="media__center__header--card">
          <div className="pos">
            <span>Home</span>
            {pathname == "/press-release" && (
              <span className="title">Press Release</span>
            )}
            {pathname == "/press-kit-dfm" && (
              <span className="title">Download</span>
            )}
          </div>
          {pathname == "/press-release" && <h1>PRESS RELEASE</h1>}
          {pathname == "/press-kit-dfm" && <h1>Download</h1>}
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
          {pathname == "/press-release" && <PressRelease />}
          {pathname == "/press-kit-dfm" && <Download />}
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;
