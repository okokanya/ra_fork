import React, { Component } from "react";

const CardItem = ({
  title,
  pick,
  brand,
  price,
  sizes = [],
  id,
  categoryId
}) => {
  return (
    <div class="main-screen__product-info">
      <div class="product-info-title">
        <h2>Ботинки женские</h2>
        <div class="in-stock">В наличии</div>
      </div>
      <div class="product-features">
        <table class="features-table">
          <tr>
            <td class="left-col">Артикул:</td>
            <td class="right-col">BD0677C</td>
          </tr>
          <tr>
            <td class="left-col">Производитель:</td>
            <td class="right-col">
              <a href="#">
                <span class="producer">Fabi</span>
              </a>
            </td>
          </tr>
          <tr>
            <td class="left-col">Цвет:</td>
            <td class="right-col">чёрный</td>
          </tr>
          <tr>
            <td class="left-col">Материалы:</td>
            <td class="right-col">натуральная кожа</td>
          </tr>
          <tr>
            <td class="left-col">Сезон:</td>
            <td class="right-col">Осень-зима</td>
          </tr>
          <tr>
            <td class="left-col">Повод:</td>
            <td class="right-col">Любой</td>
          </tr>
        </table>
      </div>
      <p class="size">Размер</p>
      <ul class="sizes">
        <li>
          <a href="#">36</a>
        </li>
        <li class="active">
          <a href="#">37</a>
        </li>
        <li>
          <a href="#">38</a>
        </li>
        <li>
          <a href="#">38</a>
        </li>
        <li>
          <a href="#">39</a>
        </li>
      </ul>
      <div class="size-wrapper">
        <a href="#">
          <span class="size-rule" />
          <p class="size-table">Таблица размеров</p>
        </a>
      </div>
      <a href="#" class="in-favourites-wrapper">
        <div class="favourite" href="#" />
        <p class="in-favourites">В избранное</p>
      </a>
      <div class="basket-item__quantity">
        <div class="basket-item__quantity-change basket-item-list__quantity-change_minus">
          -
        </div>
        1
        <div class="basket-item__quantity-change basket-item-list__quantity-change_plus">
          +
        </div>
      </div>
      <div class="price">26 120 ₽</div>
      <button class="in-basket in-basket-click">В корзину</button>
    </div>
  );
};

export default CardItem;
