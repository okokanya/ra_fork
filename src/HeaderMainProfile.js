import React, { Component } from "react";
import Favorite from "./Favorite";
import style from "./css/style.css";
import fontAwesomeMin from "./css/fontAwesomeMin.css";
import { Link } from "react-router-dom";


const HeaderMainProfile = ({ isLkOpened, isBasketOpened, isPanelOpen }) => {
    return (

    <div
      className={
        isLkOpened || isBasketOpened
          ? "header-main__hidden-panel hidden-panel header-main__hidden-panel_visible "
          : "hidden-panel__profile"
      }
    >
      <div className="wrapper">
        <div
          className={
            isLkOpened
              ? "hidden-panel__profile hidden-panel__profile_visible"
              : "hidden-panel__profile"
          }
        >
          <a href="#">Личный кабинет</a>
          <a href="favorite.html">
            <i className="fa fa-heart-o" aria-hidden="true" />
            Избранное
          </a>
          <a href="#">Выйти</a>
        </div>
        <div
          className={
            isBasketOpened
              ? "hidden-panel__basket basket-dropped hidden-panel__basket_visible"
              : "hidden-panel__basket basket-dropped"
          }
        >

          <div className="basket-dropped__title">В вашей корзине:</div>
          <div className="basket-dropped__product-list product-list">
            <div className="product-list__item">
              <a className="product-list__pic">
                <img src="img/product-list__pic_1.jpg" alt="product" />{" "}
              </a>
              <a href="#" className="product-list__product">
                Ботинки женские, Baldinini
              </a>
              <div className="product-list__fill" />
              <div className="product-list__price">
                12 360
                <i className="fa fa-rub" aria-hidden="true" />
              </div>
              <div className="product-list__delete">
                <i className="fa fa-times" aria-hidden="true" />
              </div>
            </div>

            <div className="product-list__item">
              <a className="product-list__pic">
                <img src="img/product-list__pic_1.jpg" alt="product" />{" "}
              </a>
              <a href="#" className="product-list__product">
                Ботинки женские, Baldinini
              </a>
              <div className="product-list__fill" />
              <div className="product-list__price">
                12 360
                <i className="fa fa-rub" aria-hidden="true" />
              </div>
              <div className="product-list__delete">
                <i className="fa fa-times" aria-hidden="true" />
              </div>
            </div>
            <div className="product-list__item">
              <a className="product-list__pic">
                <img src="img/product-list__pic_1.jpg" alt="product" />{" "}
              </a>
              <a href="#" className="product-list__product">
                Ботинки женские, Baldinini
              </a>
              <div className="product-list__fill" />
              <div className="product-list__price">
                12 360
                <i className="fa fa-rub" aria-hidden="true" />
              </div>
              <div className="product-list__delete">
                <i className="fa fa-times" aria-hidden="true" />
              </div>
            </div>
            <div className="product-list__item">
              <a className="product-list__pic">
                <img src="img/product-list__pic_1.jpg" alt="product" />{" "}
              </a>
              <a href="#" className="product-list__product">
                Ботинки женские, Baldinini
              </a>
              <div className="product-list__fill" />
              <div className="product-list__price">
                12 360
                <i className="fa fa-rub" aria-hidden="true" />
              </div>
              <div className="product-list__delete">
                <i className="fa fa-times" aria-hidden="true" />
              </div>
            </div>
          </div>
          <a className="basket-dropped__order-button" href="order.html">
            Оформить заказ
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeaderMainProfile;
