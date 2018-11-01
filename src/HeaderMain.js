
import React, { Component } from "react";
import HeaderDD from './HeaderDD';
import HeaderMainProfile from './HeaderMainProfile';
import HeaderLkMenu from './HeaderLkMenu';
import headerLogo from "./img/headerLogo.png";



const HeaderMain = ({ isOpened, func }) => {
  console.log("!!!", func);
  return (
    <div className="header-main">
    <div className="header-main__wrapper wrapper">
      <div className="header-main__phone">
        <a href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
        <p>Ежедневно: с 09-00 до 21-00</p>
      </div>
      <div className="header-main__logo">
        <a href="#">
          <h1>
            <img src={headerLogo} alt="logotype" />
          </h1>
        </a>
        <p>Обувь и аксессуары для всей семьи</p>
      </div>
      <div className="header-main__profile">
        <div className="header-main__pics">
          <div className="header-main__pic header-main__pic_search" />
          <div className="header-main__pic_border" />
          <div className="header-main__pic header-main__pic_profile" onClick={this.handleClick} >
            <div className="header-main__pic_profile_menu " />
          </div>
          <div className="header-main__pic_border" />
          <div className="header-main__pic header-main__pic_basket"  onClick={this.handleClick} >
            <div className="header-main__pic_basket_full">1</div>
            <div className="header-main__pic_basket_menu" />
          </div>
        </div>
        <form className="header-main__search" action="#">
          <input placeholder="Поиск" />
          <i className="fa fa-search" aria-hidden="true" />
        </form>
      </div>
    </div>
    </div>
    )}
  
    export default HeaderMain;
