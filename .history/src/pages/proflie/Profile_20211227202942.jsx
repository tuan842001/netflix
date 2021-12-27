import React from "react";
import "./profile.css";
import { userData } from "../../data.js";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <div className="profileCotainer">
        <span className="profileTitle">Who's watching?</span>
        <div className="profileList">
          {userData.map((item) => (
            <div className="profiles">
              <Link to="/home" className="profileLink Link">
                <img className="profileImg" src={item.img} alt="" />
                <span className="profileUserName">{item.username}</span>
              </Link>
            </div>
          ))}
        </div>
        <button className="profileButton">Manage Profile</button>
      </div>
    </div>
  );
}

export default Profile;
