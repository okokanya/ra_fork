import React, { Component } from "react";

const BasketItem = ({img, price, info}) =>(
  <div className="product-list__item">
    <a className="product-list__pic">
      <img src={img} alt="product" />{" "}
    </a>
    <a href="#" className="product-list__product">
      {info}
    </a>
    <div className="product-list__fill" />
    <div className="product-list__price">
      {price}
      <i className="fa fa-rub" aria-hidden="true" />
    </div>
    <div className="product-list__delete">
      <i className="fa fa-times" aria-hidden="true" />
    </div>
  </div>
)

export default BasketItem;