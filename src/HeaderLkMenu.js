import React, { Component } from "react";

const HeaderLkMenu = ({isOpened}) => {
  console.log('!!!', isOpened)
  if (isOpened === true) {
    return (
      <div className="hidden-panel__profile">
        <a href="#">Личный кабинет</a>
        <a href="favorite.html">
          <i className="fa fa-heart-o" aria-hidden="true" />
          Избран---ное
        </a>
        <a href="#">Выйти</a>
      </div>
    );
  } else {
    return (
      <div className="hidden-panel__profile">
        <a href="#">Лич444ный кабинет</a>
        <a href="favorite.html">
          <i className="fa fa-heart-o" aria-hidden="true" />
          Избранное
        </a>
        <a href="#">Выйти</a>
      </div>
    );
  }
};

export default HeaderLkMenu;
