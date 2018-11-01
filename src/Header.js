import React, { Component } from "react";
import HeaderDD from "./HeaderDD";
import HeaderMainProfile from "./HeaderMainProfile";
import HeaderMain from "./HeaderMain";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false,
      isLkOpened: false,
      isBasketOpened: false
    };
  }

  handleClickLK = () => {
    this.setState({ isLkOpened: !this.state.isLkOpened });
    this.setState({ isBasketOpened: false });
  };

  handleClickBasket = () => {
    this.setState({ isBasketOpened: !this.state.isBasketOpened });
    this.setState({ isLkOpened: false });
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
        <HeaderMain
          isLkOpened={this.state.isLkOpened}
          isBasketOpened={this.state.isBasketOpened}
          funcLK={this.handleClickLK}
          funcBasket={this.handleClickBasket}
        />

        <HeaderMainProfile isBasketOpened={this.state.isBasketOpened} isLkOpened={this.state.isLkOpened} />

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

        <HeaderDD isPanelOpen={this.state.isPanelOpen}  />

        <script src="js/script.js" />
        <script src="js/slider.js" />
      </header>
    );
  }
}

export default Header;
