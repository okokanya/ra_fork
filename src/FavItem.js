import React, { Component } from "react";
import products from "./data/products.json";
import apiConfig from "./apiConfig.js";

const FavItem = ({ title, pick, brand, price, sizes= [], id }) => (
  <a className="item-list__item-card item" href="product-card-desktop.html">
    <div className="item-pic-1">
      <img className="item-pic" src={pick} alt="shoe image" />
      <div className="product-catalogue__product_favorite">
        <p />
      </div>
      <div className="arrow arrow_left" />
      <div className="arrow arrow_right" />
    </div>
    <div className="item-desc">
      <h4 className="item-name">{title}</h4>
      <p className="item-producer">
        Производитель: <span className="producer">{brand}</span>
      </p>
      <p className="item-price">{price}</p>
      <div className="sizes">
        <p className="sizes__title">Размеры в наличии:</p>
        <p className="sizes__avalible">{sizes.map(size => size.avalible && <div>{size}</div>)}</p>

      </div>
    </div>
  </a>
);

export default FavItem;
