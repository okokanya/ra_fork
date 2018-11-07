import React, { Component } from "react";

class CatalogueItem extends Component {
  render() {
    return (
      <a className="item-list__item-card item" href="product-card-desktop.html">
        <div className="item-pic">
          <img
            className="item-pic-4"
            src="img/catalogue-pics/product-catalogue__item-4.png"
            alt="Кроссовки женские"
          />
          <div className="product-catalogue__product_favorite">
            <p />
          </div>
          <div className="arrow arrow_left" />
          <div className="arrow arrow_right" />
        </div>
        <div className="item-desc">
          <h4 className="item-name">Кроссовки женские</h4>
          <p className="item-producer">
            Производитель: <span className="producer">Damlax</span>
          </p>
          <p className="item-price">6 520</p>
          <div className="sizes">
            <p className="sizes__title">Размеры в наличии:</p>
            <p className="sizes__avalible">36, 37, 38, 39, 40, 41, 42</p>
          </div>
        </div>
      </a>
    );
  }
}

export default CatalogueItem;
