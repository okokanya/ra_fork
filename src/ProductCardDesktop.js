import React, { Component } from 'react';

import style from './css/style-product-card.css';
import apiConfig from "./apiConfig.js";
import CardItem from "./CardItem.js";

class ProductCardDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  getData = props => {
    const id = props.match.params.id
      ? `?id=${props.match.params.id}`
      : ``;

    fetch(apiConfig.base + apiConfig.products + {id})
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  componentDidMount() {
    this.getData(this.props);
  }

  UNSAFE_componentWillUpdate(nextProps) {
    this.getData(nextProps);
  }

  render() {
    return (

  // <h1>ProductCardDesktop</h1>
  <div>
    <div class="site-path">
      <ul class="site-path__items">
        <li class="site-path__item"><a href="index.html">Главная</a></li>
        <li class="site-path__item"><a href="#">Женская обувь</a></li>
        <li class="site-path__item"><a href="#">Ботинки</a></li>
        <li class="site-path__item"><a href="#">Ботинки женские</a></li>
      </ul>
    </div>
    <main class="product-card">
      <section class="product-card-content">
        <h2 class="section-name">Ботинки женские</h2>
        <section class="product-card-content__main-screen">
          <section class="main-screen__favourite-product-slider">
            <div class="favourite-product-slider">
              <div class="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up"></div>
              <div class="favourite-product-slider__item favourite-product-slider__item-1">
                <a href="#"></a>
              </div>
              <div class="favourite-product-slider__item favourite-product-slider__item-2">
                <a href="#"></a>
              </div>
              <div class="favourite-product-slider__item favourite-product-slider__item-3">
                <a href="#"></a>
              </div>
              <div class="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down"></div>
            </div>
          </section>
          <div class="main-screen__favourite-product-pic">
            <a href="#"><img src="img/product-card-pics/product-card__favourite-product-pic.png" alt="" /></a>
            <a href="#" class="main-screen__favourite-product-pic__zoom"></a>
          </div>
          
          {this.state.items.map(item => (
              <CardItem
                key={item.id}
                categoryId={item.categoryId}
                title={item.title}
                pick={item.images[0]}
                brand={item.brand}
                price={item.price}
                id={item.id}
                sizes={item.sizes}
              />
            ))}

{/* 
            <div class="product-info-title"><h2>Ботинки женские</h2><div class="in-stock">В наличии</div></div>
            <div class="product-features">
              <table class="features-table">
                <tr>
                  <td class="left-col">Артикул:</td>
                  <td class="right-col">BD0677C</td>
                </tr>
                <tr>
                  <td class="left-col">Производитель:</td>
                  <td class="right-col"><a href="#"><span class="producer">Fabi</span></a></td>
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
              <li><a href="#">36</a></li>
              <li class="active"><a href="#">37</a></li>
              <li><a href="#">38</a></li>
              <li><a href="#">38</a></li>
              <li><a href="#">39</a></li>
            </ul>
            <div class="size-wrapper">
              <a href="#"><span class="size-rule"></span><p class="size-table">Таблица размеров</p></a>
            </div>
            <a href="#" class="in-favourites-wrapper">
              <div class="favourite" href="#"></div><p class="in-favourites">В избранное</p>
            </a>
            <div class="basket-item__quantity">
              <div class="basket-item__quantity-change basket-item-list__quantity-change_minus">-</div>1
              <div class="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
            </div>
            <div class="price">26 120 ₽</div>
            <button class="in-basket in-basket-click">В корзину</button>
          </div>

           */}
        </section>
      </section>
    </main>
    <section class="product-card__overlooked-slider">
      <h3>Вы смотрели:</h3>
      <div class="overlooked-slider">
        <div class="overlooked-slider__arrow overlooked-slider__arrow_left arrow"></div>
        <div class="overlooked-slider__item overlooked-slider__item-1">
          <a href="product-card-desktop.html"></a>
        </div>
        <div class="overlooked-slider__item overlooked-slider__item-2">
          <a href="product-card-desktop.html"></a>
        </div>
        <div class="overlooked-slider__item overlooked-slider__item-3">
          <a href="product-card-desktop.html"></a>
        </div>
        <div class="overlooked-slider__item overlooked-slider__item-4">
          <a href="product-card-desktop.html"></a>
        </div>
        <div class="overlooked-slider__item overlooked-slider__item-5">
          <a href="product-card-desktop.html"></a>
        </div>
        <div class="overlooked-slider__arrow overlooked-slider__arrow_right arrow"></div>
      </div>
    </section>
    <section class="product-card__similar-products-slider">
      <h3>Похожие товары:</h3>
      <div class="similar-products-slider">
        <div class="similar-products-slider__arrow similar-products-slider__arrow_left arrow"></div>
        <div class="similar-products-slider__item-list__item-card item">
          <div class="similar-products-slider__item">
            <a href="product-card-desktop.html"><img src="img/product-card-pics/product-card__similar-products-slider-item-1.png" class="similar-products-slider__item-pic-1" alt="Ботинки женские" />
            </a>
          </div>
          <div class="similar-products-slider__item-desc">
            <h4 class="similar-products-slider__item-name">Ботинки женские</h4>
            <p class="similar-products-slider__item-producer">Производитель: <span class="producer">Norma J.Baker</span></p>
            <p class="similar-products-slider__item-price">23 150</p>
          </div>    
        </div>
        <div class="similar-products-slider__item-list__item-card item">
          <div class="similar-products-slider__item">
            <a href="product-card-desktop.html"><img src="img/product-card-pics/product-card__similar-products-slider-item-2.png" class="similar-products-slider__item-pic-2" alt="Полуботинки женские" /></a>
          </div>
          <div class="similar-products-slider__item-desc">
            <h4 class="similar-products-slider__item-name">Полуботинки женские</h4>
            <p class="similar-products-slider__item-producer">Производитель: <span class="producer">Shoes Market</span></p>
            <p class="similar-products-slider__item-price">4 670</p>
          </div>    
        </div>
        <div class="similar-products-slider__item-list__item-card item">
          <div class="similar-products-slider__item">
            <a href="product-card-desktop.html"><img src="img/product-card-pics/product-card__similar-products-slider-item-3.png" class="similar-products-slider__item-pic-3" alt="Ботинки женские" /></a> 
          </div>
          <div class="similar-products-slider__item-desc">
            <h4 class="similar-products-slider__item-name">Ботинки женские</h4>
            <p class="similar-products-slider__item-producer">Производитель: <span class="producer">Menghi Shoes</span></p>
            <p class="similar-products-slider__item-price">6 370</p>
          </div>
        </div>
        <div class="similar-products-slider__arrow similar-products-slider__arrow_right arrow"></div>
      </div>
    </section>
  </div>
)}}


export default ProductCardDesktop;