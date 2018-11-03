import React, { Component } from "react";
import Categories from "./Categories";
import MainProfile from "./MainProfile";
import headerLogo from "../img/headerLogo.png";

const Main = ({
  isBasketOpened,
  isLkOpened,
  funcLK,
  funcBasket,
  handleClickSearch,
  isSearchActive
}) => {
  return (
    <div className="header-main">
      <div className="header-main__wrapper wrapper">
        <div className="header-main__phone">
          <a href="tel:+7-495-790-35-03">+7 495 79 03 03</a>
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
        <div className="header-main__profile"               
>
          <div className="header-main__pics">
            <div 
              className={
                isSearchActive
                  ? "header-main__pic header-main__pic_search header-main__pic_search_is-hidden"
                  : "header-main__pic header-main__pic_search"
              }
              onClick={handleClickSearch}
            />
            <div className="header-main__pic_border" />
            <div
              className="header-main__pic header-main__pic_profile"
              onClick={funcLK}
            >
              <div
                className={
                  isLkOpened
                    ? "header-main__pic_profile_menu header-main__pic_profile_menu_is-active"
                    : "header-main__pic_profile_menu"
                }
              />
            </div>
            <div className="header-main__pic_border" />

            <div
              className="header-main__pic header-main__pic_basket "
              onClick={funcBasket}
            >
              <div className="header-main__pic_basket_full">1</div>

              <div
                className={
                  isBasketOpened
                    ? "header-main__pic_basket_menu header-main__pic_basket_menu_is-active"
                    : "header-main__pic_basket_menu"
                }
              />
            </div>
          </div>
          <form
            className= {
              isSearchActive
                ? 
                "header-main__search header-main__search_active": "header-main__search"
                
            }
            action="#"
            onClick={handleClickSearch}
          >
            <input placeholder="Поиск" />
            <i className="fa fa-search" aria-hidden="true" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
