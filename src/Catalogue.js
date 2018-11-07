import React, { Component } from 'react';
import CataogueFilters from './CatalogueFilters';
import CatalogueItem from './CatalogueItem';
import styleCatalogue from './css/styleCatalogue.css';


class Catalogue extends Component {
render() {
return (
  <div>
  {/* // <!-- Каталог товаров -->
  // <!-- Breadcrumbs --> */}
  <div className="site-path">
    <ul className="site-path__items">
      <li className="site-path__item"><a href="index.html">Главная</a></li>
      <li className="site-path__item"><a href="#">Женская обувь</a></li>
    </ul>
  </div>
  {/* // <!-- Тело каталога с сайдбаром --> */}
  <main className="product-catalogue">
    <CataogueFilters />
    {/* <!-- Список товаров каталога --> */}
    <section  className="product-catalogue__item-list">
      <CatalogueItem />
      <CatalogueItem />
      <CatalogueItem />
      <CatalogueItem />
    </section>
    {/* <!-- Пагинация под каталогом --> */}
    <div className="product-catalogue__pagination">
      <div className="page-nav-wrapper">
        <div className="angle-back"><a href="#"></a></div>
        <ul>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="">...</a></li>
          <li><a href="#">99</a></li>
        </ul>
        <div className="angle-forward"><a href="#"></a></div>
      </div>
    </div>
  {/* </section> */}
</main>
{/* <!-- Слайдер внизу каталога  -->      */}
<section className="product-catalogue__overlooked-slider">
  <h3>Вы смотрели:</h3>
  <div className="overlooked-slider">
    <div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow"></div>
    <div className="overlooked-slider__item overlooked-slider__item-1">
      <a href="product-card-desktop.html"></a>
    </div>
    <div className="overlooked-slider__item overlooked-slider__item-2">
      <a href="product-card-desktop.html"></a>
    </div>
    <div className="overlooked-slider__item overlooked-slider__item-3">
      <a href="product-card-desktop.html"></a>
    </div>
    <div className="overlooked-slider__item overlooked-slider__item-4">
      <a href="product-card-desktop.html"></a>
    </div>
    <div className="overlooked-slider__item overlooked-slider__item-5">
      <a href="product-card-desktop.html"></a>
    </div>
    <div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow"></div>
  </div>
</section>
</div>
  )
}}
export default Catalogue;