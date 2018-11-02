import React, { Component } from "react";
import BasketItem from "./BasketItem";
import productListPic1 from "../img/productListPic1.jpg";

const HeaderMainProfile = ({ isLkOpened, isBasketOpened, isPanelOpen }) => {
  return (
    <div
      className={
        isLkOpened || isBasketOpened
          ? "header-main__hidden-panel hidden-panel header-main__hidden-panel_visible"
          : "hidden-panel__profile"
      }
    >
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
          <BasketItem
            price={"12 900 "}
            img={productListPic1}
            info={"Ботинки женские, Baldinini"}
          />
          <BasketItem
            price={"14 900 "}
            img={productListPic1}
            info={"Ботинки женские, Baldinini"}
          />
          <BasketItem
            price={"16 900 "}
            img={productListPic1}
            info={"Ботинки женские, Baldinini"}
          />
          <BasketItem
            price={"17 900 "}
            img={productListPic1}
            info={"Ботинки женские, Baldinini"}
          />
          <BasketItem
            price={"18 900 "}
            img={productListPic1}
            info={"Ботинки женские, Baldinini"}
          />
          <BasketItem
            price={"17 900 "}
            img={productListPic1}
            info={"Ботинки женские, Baldinini"}
          />
        </div>
        <a className="basket-dropped__order-button" href="order.html">
          Оформить заказ
        </a>
      </div>
    </div>
  );
};
export default HeaderMainProfile;
