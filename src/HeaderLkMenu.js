import React, { Component } from "react";
import Favorite from "./Favorite";
import style from "./css/style.css";
import fontAwesomeMin from "./css/fontAwesomeMin.css";
import { Link } from "react-router-dom";

const HeaderLkMenu = ({ isOpened }) => {
  console.log("!!!", isOpened);
  return (
    <div
      className={
        isOpened ? "hidden-panel__profile" : "hidden-panel__profile_visible"
      }
    >
          <a href="#">Личный кабинет</a>
          <Link to="/favorite">
            <i className="fa fa-heart-o" aria-hidden="true" />
            Избранное
          </Link>
          <a href="#">Выйти</a>
    </div>
  );
};

export default HeaderLkMenu;
