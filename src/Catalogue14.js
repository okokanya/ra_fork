import React, { Component } from "react";

const CatalogueItem14 = ({
  title,
  pick,
  brand,
  price,
  sizes = [],
  id,
  categoryId
}) => {
  if (categoryId == 14) {
  return (
    <a className="item-list__item-card item" href="product-card-desktop.html">
      <div className="item-pic">
        <img
          // className="item-pic-4"
          src={pick}
          alt={title}
        />
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
          <p className="sizes__avalible">36, 37, 38, 39, 40, 41, 42</p>
        </div>
      </div>
    </a>
  )} else {
    return null
  }
};

export default CatalogueItem14;
