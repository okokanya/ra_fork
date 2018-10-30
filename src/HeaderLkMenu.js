import React, { Component } from "react";

class HeaderLkMenu extends Component {
  render() {
    return (
      <div className="hidden-panel__profile">
        <a href="#">Личный кабинет</a>
        <a href="favorite.html">
          <i className="fa fa-heart-o" aria-hidden="true" />
          Избранное
        </a>
        <a href="#">Выйти</a>
      </div>
    );
  }
}

export default HeaderLkMenu;
