import React, { Component } from "react";
import HeaderDD from "./HeaderDD";
import HeaderMainProfile from "./HeaderMainProfile";
import HeaderMain from "./HeaderMain";

// function headerHiddenPanelBasketVisibility() {
//   document.querySelector('.hidden-panel__profile').classList.remove('hidden-panel__profile_visible');
//   document.querySelector('.hidden-panel__basket').classList.add('hidden-panel__basket_visible');
//   if (document.querySelector('.header-main__pic_profile_menu_is-active')) {
//       document.querySelector('.header-main__pic_basket_menu').classList.toggle('header-main__pic_basket_menu_is-active');
//       document.querySelector('.header-main__pic_profile_menu_is-active').classList.toggle('header-main__pic_profile_menu_is-active');
//   } else {
//       document.querySelector('.header-main__hidden-panel').classList.toggle('header-main__hidden-panel_visible');
//       document.querySelector('.header-main__pic_basket_menu').classList.toggle('header-main__pic_basket_menu_is-active');
//   }

// }

// function headerHiddenPanelProfileVisibility() {
//   document.querySelector('.hidden-panel__basket').classList.remove('hidden-panel__basket_visible');
//   // document.querySelector('.hidden-panel__profile').classList.add('hidden-panel__profile_visible');
//   if (document.querySelector('.header-main__pic_basket_menu_is-active')) {
//       document.querySelector('.header-main__pic_basket_menu_is-active').classList.toggle('header-main__pic_basket_menu_is-active');
//       document.querySelector('.header-main__pic_profile_menu').classList.toggle('header-main__pic_profile_menu_is-active');
//   } else {
//       document.querySelector('.header-main__hidden-panel').classList.toggle('header-main__hidden-panel_visible');
//       document.querySelector('.header-main__pic_profile_menu').classList.toggle('header-main__pic_profile_menu_is-active');
//   }

// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLkOpened: false,
      isBasketOpened: false
    };
  }

  handleClick = () => {
    this.setState({ isLkOpened: !this.state.isLkOpened });
  };

  render() {
    return (
      <header className="header">
        <div className="top-menu">
          <div className="wrapper">
            <ul className="top-menu__items">
              <li className="top-menu__item">
                <a href="#">Возврат</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Доставка и оплата</a>
              </li>
              <li className="top-menu__item">
                <a href="#">О магазине</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Контакты</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Новости</a>
              </li>
            </ul>
          </div>
        </div>
        <HeaderMain isOpened={this.state.isLkOpened} func={this.handleClick} />

        <HeaderMainProfile isOpened={this.state.isLkOpened} />


        {/* <div className="header-main__hidden-panel hidden-panel">
        <div className="wrapper">
        <HeaderLkMenu isOpened={this.state.isLkOpened} />
          <div className="hidden-panel__basket basket-dropped">
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
      </div>*/}
        <nav className="main-menu">
          <div className="wrapper">
            <ul className="main-menu__items">
              <li className="main-menu__item main-menu__item_sales">
                <a href="#">Акции</a>
              </li>
              <li className="main-menu__item main-menu__item_women">
                <a href="#">Женская обувь</a>
              </li>
              <li className="main-menu__item main-menu__item_men">
                <a href="#">Мужская обувь</a>
              </li>
              <li className="main-menu__item main-menu__item_kids">
                <a href="#">Детская обувь</a>
              </li>
              <li className="main-menu__item main-menu__item_accessories">
                <a href="#">Аксессуары</a>
              </li>
              <li className="main-menu__item main-menu__item_home">
                <a href="#">Для дома</a>
              </li>
              <li className="main-menu__item main-menu__item_brands">
                <a href="#">Бренды</a>
              </li>
              <li className="main-menu__item main-menu__item_new">
                <a href="#">Новинки</a>
              </li>
            </ul>
          </div>
        </nav>

        <HeaderDD isBasketOpened={this.state.isBasketOpened} />

        <script src="js/script.js" />
        <script src="js/slider.js" />
      </header>
    );
  }
}

export default Header;
