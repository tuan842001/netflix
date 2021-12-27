import React from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.css";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/131540755_3648682185186021_7775788743179145483_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=to89tvbB-1gAX-xk35Y&_nc_ht=scontent.fhan5-8.fna&oh=00_AT-FUdcUuIp5zxQuF9jEanZs-vEivR4s4tMFK4msdDZwRw&oe=61EE073A"
        alt=""
      />
      <div className="info">
        <img src="../../../love.png" alt="" />
        <span className="desc">
          I just want to tell you that I am very appreciated that you're always
          beside me no matter what happens. I hope that you can feel my love for
          you, Van Tuan...
        </span>
        <div className="buttons">
          <Link to="/watch">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span> More info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
