import React, { Component } from "react";
import { Link } from "react-router-dom";


const CatalogueItem = ({
  title,
  pick,
  brand,
  price,
  sizes = [],
  id,
  categoryId
}) => {
  return (
    <Link className="item-list__item-card item" to={id}>
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
        {/* <div className="sizes">
          <p className="sizes__title">Размеры в наличии:</p>
          <p className="sizes__avalible">36, 37, 38, 39, 40, 41, 42</p>
        </div> */}
      </div>
    </Link>
  )
};

export default CatalogueItem;
